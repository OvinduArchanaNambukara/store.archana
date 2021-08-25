import React, {useEffect, useState} from "react";
import {Button, Card, Col, Container, Form, FormControl, FormGroup, InputGroup, Row} from "react-bootstrap";
import SignInArea from "./SignInArea";
import {FaRegCreditCard, FaRegMoneyBillAlt, FiEye, FiEyeOff} from "react-icons/all";
import ChangeShippingAddress from "./ChangeShippingAddress";
import Select, {ValueType} from "react-select";
import {customCallStyles} from "../../custom-styles/custom-selector-styles";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import {callStateType} from "../../store/reducers/CallReducer";
import {countryOptionTypes, DeliveryFormType} from "../../types/types";
import {addDeliveryFormDetails} from "../../store/actions/OrderFormAction";
import {ApolloError, useMutation} from "@apollo/client";
import {ADD_ORDER} from "../../graphql/mutation";
import {toast} from "react-toastify";
import {processOrderDetails} from "../../functions/ProcessOrderDetails";

const CashOnDelivery: React.FC = () => {
  const [fullName, setFullName] = useState<string | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [postalCode, setPostalCode] = useState<number | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [flag, setFlag] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [retypeEmail, setRetypeEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [instruction, setInstruction] = useState<string | null>(null);
  const [isFormValidated, setIsFormValidated] = useState<boolean>(false);
  const [isShippingFormValidated, setIsShippingFormValidated] = useState<boolean>(false);
  const [match, setMatch] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [changeShippingAddress, setChangeShippingAddress] = useState<boolean | null>(null);
  const countryCodes: callStateType[] = useSelector((state: RootState) => state.callReducer);
  const deliveryForm = useSelector((state: RootState) => state.orderFormReducer.deliveryForm);
  const shippingForm = useSelector((state: RootState) => state.orderFormReducer.shippingForm);
  const cartState = useSelector((state: RootState) => state.cartReducer);
  const [createOrder] = useMutation(ADD_ORDER);
  const dispatch = useDispatch();

  const options: countryOptionTypes[] = countryCodes.map<countryOptionTypes>((country_code: callStateType) => {
    return {
      label: country_code.flag + ' ' + country_code.name,
      value: country_code.name,
      code: country_code.dial_code,
      flag: country_code.flag,
      name: country_code.name
    }
  });

  useEffect(() => {
    let deliveryDetails: DeliveryFormType = {
      fullName: fullName !== null ? fullName : deliveryForm ? deliveryForm.fullName : '',
      address: address !== null ? address : deliveryForm ? deliveryForm.address : '',
      city: city !== null ? city : deliveryForm ? deliveryForm.city : '',
      postalCode: postalCode !== null ? postalCode : deliveryForm ? deliveryForm.postalCode : 0,
      country: country !== null ? country : deliveryForm ? deliveryForm.country : '',
      contactNo: phoneNumber !== null ? phoneNumber : deliveryForm ? deliveryForm.contactNo : '',
      payment_method: paymentMethod !== null ? paymentMethod : deliveryForm ? deliveryForm.payment_method : 'cash',
      email: email !== null ? email : deliveryForm ? deliveryForm.email : '',
      deliveryInstructions: instruction !== null ? instruction : deliveryForm ? deliveryForm.deliveryInstructions : '',
      password: password !== null ? password : deliveryForm ? deliveryForm.password : '',
      retypeEmail: retypeEmail !== null ? retypeEmail : deliveryForm ? deliveryForm.retypeEmail : '',
      checkButton: changeShippingAddress !== null ? changeShippingAddress : deliveryForm ? deliveryForm.checkButton : false,
      countryCode: countryCode !== null ? countryCode : deliveryForm ? deliveryForm.countryCode : ''
    }
    dispatch(addDeliveryFormDetails(deliveryDetails));
  }, [fullName, address, city, postalCode, country, country, phoneNumber, email, instruction, paymentMethod,
    password, retypeEmail, changeShippingAddress]);

  const handleOnChangeShippingAddress = () => {
    setChangeShippingAddress(true);
  }

  const handleOnChangeUserAddress = () => {
    setChangeShippingAddress(false);
  }

  const handleOnPaymentMethod = (payment: string) => {
    setPaymentMethod(payment);
  }

  const handleOnShowPassword = () => {
    setShowPassword(!showPassword);
  }

  const handleOnFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(e.target.value);
  }

  const handleOnAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  }

  const handleOnCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  }

  const handleOnPostalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostalCode(parseInt(e.target.value));
  }

  const handleOnCountryChange = (option: ValueType<any, false>) => {
    if (option) {
      setCountry(option.value);
      setFlag(option.flag);
      setCountryCode(option.code);
    } else {
      setCountry(null);
      setFlag(null);
      setCountryCode(null);
    }
  }

  const handleOnPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  }

  const handleOnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setMatch(false);
  }

  const handleOnRetypeEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRetypeEmail(e.target.value);
    setMatch(false);
  }

  const handleOnInstructionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInstruction(e.target.value);
  }

  const handleOnPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  const handleOnSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (changeShippingAddress && shippingForm && (shippingForm.city === '' || shippingForm.name === '' ||
        shippingForm.address === '' || isNaN(shippingForm.postalCode) || shippingForm.contactNumber === '' ||
        shippingForm.country === '')) {
      setIsShippingFormValidated(true);
      return;
    }
    if (fullName === '' || fullName === null || address === '' || address === null || city === '' || city === null ||
        postalCode === 0 || postalCode === null || country === '' || country === null || phoneNumber === '' ||
        phoneNumber === null || email === '' || retypeEmail === '' || retypeEmail === null || password === '' ||
        password === null) {
      setIsFormValidated(true);
      return;
    }
    if (email !== retypeEmail) {
      setMatch(true);
      return;
    }
    toast.info('🙄 Loading');
    if (!deliveryForm) {
      return;
    }
    createOrder({
      variables: {
        order: processOrderDetails(deliveryForm, shippingForm, cartState.cartList, changeShippingAddress,
            cartState.subTotal)
      }
    })
        .then(() => toast.success('😘 Process Success'))
        .catch((err: ApolloError) => toast.error('😓 Something wrong'));
  }

  return (
      <Container className='cashOnDelivery' fluid={true}>
        <Row className='mt-1 mx-0 justify-content-center'>
          <Col xl={10} xs={12} className='px-0'>
            <Row className='pl-md-4 pr-md-4'>
              <Col lg={{span: 7, offset: 5}} xs={12}>
                <SignInArea/>
                <Row>
                  <Col xs={12} className='px-3'>
                    <Card>
                      <Card.Header className='pb-0'>
                        <Card.Title>Shipping and Billing Address</Card.Title>
                      </Card.Header>
                      <Card.Body>
                        <Form noValidate validated={isFormValidated}>
                          <Form.Group controlId="formGridFullName" className='mb-0'>
                            <Form.Label className='mb-0'>Full Name*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Your Full Name"
                                value={deliveryForm ? deliveryForm.fullName : ''}
                                onChange={handleOnFullNameChange}
                                required
                            />
                            <FormControl.Feedback type="invalid">
                              <p className="font-weight-bold mb-0">Enter Full Name</p>
                            </FormControl.Feedback>
                          </Form.Group>
                          <Form.Group controlId="formGridStreetAddress" className='mb-0'>
                            <Form.Label className='mb-0'>Address*</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Street Address"
                                value={deliveryForm ? deliveryForm.address : ''}
                                onChange={handleOnAddressChange}
                                required
                            />
                            <FormControl.Feedback type="invalid">
                              <p className="font-weight-bold mb-0">Enter Address</p>
                            </FormControl.Feedback>
                          </Form.Group>

                          <Row className="mb-0">
                            <Col md={4} className='form-group mb-0 pr-md-0'>
                              <Form.Label className='mb-0'>City / suburb*</Form.Label>
                              <Form.Control
                                  type="text"
                                  placeholder="City / suburb"
                                  value={deliveryForm ? deliveryForm.city : ''}
                                  onChange={handleOnCityChange}
                                  required
                              />
                              <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter City/suburb</p>
                              </FormControl.Feedback>
                            </Col>
                            <Col md={4} className='form-group mb-0 pr-md-0'>
                              <Form.Label className='mb-0'>Postal Code*</Form.Label>
                              <Form.Control type="number"
                                            pattern="[0-9]*"
                                            placeholder="Postal Code"
                                            value={deliveryForm ? deliveryForm.postalCode : ''}
                                            onChange={handleOnPostalCodeChange}
                                            required
                              />
                              <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Postal code</p>
                              </FormControl.Feedback>
                            </Col>
                            <Col md={4} className='form-group mb-0'>
                              <Form.Label className='mb-0'>Country*</Form.Label>
                              <Select
                                  options={options}
                                  value={options.filter(option => option.value === country)}
                                  isClearable
                                  isSearchable
                                  styles={customCallStyles}
                                  onChange={handleOnCountryChange}
                              />
                              <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Country</p>
                              </FormControl.Feedback>
                            </Col>
                          </Row>

                          <Form.Group controlId="formGridContactNumber" className='mb-0'>
                            <Form.Label className='mb-0'>Contact Number*</Form.Label>
                            <InputGroup>
                              <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">{flag} {countryCode}</InputGroup.Text>
                              </InputGroup.Prepend>
                              <Form.Control
                                  type="number"
                                  value={deliveryForm ? deliveryForm.contactNo : ''}
                                  onChange={handleOnPhoneNumberChange}
                                  required
                              />
                              <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Contact
                                  Number</p>
                              </FormControl.Feedback>
                            </InputGroup>
                          </Form.Group>
                          <Row className="mb-0">
                            <Col md={6} className='form-group mb-0 pr-md-0'>
                              <Form.Label className='mb-0'>Email*</Form.Label>
                              <Form.Control
                                  type="email"
                                  placeholder="Email"
                                  value={deliveryForm ? deliveryForm.email : ''}
                                  onChange={handleOnEmailChange}
                                  required
                              />
                              <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Email</p>
                              </FormControl.Feedback>
                              {match && <small className='text-danger font-weight-bold'>Emails are not matched</small>}
                            </Col>
                            <Col md={6} className='form-group mb-0'>
                              <Form.Label className='mb-0'>Retype Email*</Form.Label>
                              <Form.Control
                                  type="email"
                                  value={deliveryForm ? deliveryForm.retypeEmail : ''}
                                  onChange={handleOnRetypeEmailChange}
                                  required
                              />
                              <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter Retype Email</p>
                              </FormControl.Feedback>
                              {match && <small className='text-danger font-weight-bold'>Emails are not matched</small>}
                            </Col>
                          </Row>

                          <FormGroup controlId="formGridPassword" className='mb-0'>
                            <Form.Label className='mb-0'>Choose your password*</Form.Label>
                            <InputGroup>
                              <Form.Control
                                  type={showPassword ? 'text' : 'password'}
                                  value={deliveryForm ? deliveryForm.password : ''}
                                  onChange={handleOnPasswordChange}
                                  required
                              />
                              <InputGroup.Append>
                                <InputGroup.Text onClick={handleOnShowPassword}>
                                  {showPassword ? <FiEyeOff/> : <FiEye/>}
                                </InputGroup.Text>
                              </InputGroup.Append>
                              <FormControl.Feedback type="invalid">
                                <p className="font-weight-bold mb-0">Enter password</p>
                              </FormControl.Feedback>
                            </InputGroup>
                          </FormGroup>
                        </Form>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
                <div className='billing-info'>
                  <Row className='mt-4'>
                    <Col xs={12}>
                      <p>Change Shipping Address</p>
                    </Col>
                  </Row>
                  <Form.Check
                      inline
                      label="Same as user address"
                      type="radio"
                      id="radio-1"
                      onChange={handleOnChangeUserAddress}
                      checked={deliveryForm ? !deliveryForm.checkButton : changeShippingAddress === null ?
                          false : changeShippingAddress}
                  />
                  <Form.Check
                      inline
                      label="Change shipping address"
                      type="radio"
                      id="radio-2"
                      onChange={handleOnChangeShippingAddress}
                      checked={deliveryForm ? deliveryForm.checkButton : changeShippingAddress === null ?
                          true : !changeShippingAddress}
                  />

                  {(deliveryForm ? deliveryForm.checkButton : false) &&
                  <ChangeShippingAddress validated={isShippingFormValidated} options={options}/>}

                </div>
                <Row className='mt-3 text-area px-3'>
                  <Col xs={12} className='pl-0'>
                    <p>Add Delivery Instructions (Optional)</p>
                  </Col>
                  <Form.Control as='textarea' rows={4} value={deliveryForm ? deliveryForm.deliveryInstructions : ''}
                                onChange={handleOnInstructionChange}/>
                </Row>
                <Row className='payment-methods mt-3'>
                  <Col xs={12}>
                    <h5>Payment Methods</h5>
                  </Col>
                </Row>
                <Row className='mx-md-3 mx-0'>
                  <Col md={6} className='pl-md-0 pl-0 pr-0 pr-md-4'>
                    <div className='border text-center payment-method'
                         style={deliveryForm ? deliveryForm.payment_method === 'card' ? {backgroundColor: '#e1fdc1'} : {} : {}}
                         onClick={() => handleOnPaymentMethod('card')}>
                      <FaRegCreditCard size={100} className='mt-2'/>
                      <Row>
                        <Col xs={12}>
                          <label>Credit/Debit Card</label>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col md={6} className='pl-0 pl-md-4 mt-2 mt-md-0 pr-0'>
                    <div className='border text-center payment-method'
                         style={deliveryForm ? deliveryForm.payment_method === 'cash' ? {backgroundColor: '#e1fdc1'} : {} : {}}
                         onClick={() => handleOnPaymentMethod('cash')}>
                      <FaRegMoneyBillAlt size={100} className='mt-2'/>
                      <Row>
                        <Col xs={12}>
                          <label>Cash on Delivery</label>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row className='mt-3 order-btn mb-3'>
                  <Col xs={12} className='text-center'>
                    <Button variant="success" type='submit'
                            onClick={(e: React.MouseEvent<HTMLInputElement>) => handleOnSubmit(e)}>Order</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

  )
}

export default CashOnDelivery;
