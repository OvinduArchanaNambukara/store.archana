import React, {useEffect, useState} from 'react'
import {Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";
import {countryOptionTypes, ShippingFormType} from "../../types/types";
import {customCallStyles} from "../../custom-styles/custom-selector-styles";
import Select, {ValueType} from "react-select";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import {addShoppingFormDetails} from "../../store/actions/OrderFormAction";

type ChangeShippingAddressProps = {
  validated: boolean
  options: countryOptionTypes[]
}

const ChangeShippingAddress: React.FC<ChangeShippingAddressProps> = (props) => {
  const {validated, options} = props;
  const [name, setName] = useState<string | null>(null);
  const [billingAddress, setBillingAddress] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [postalCode, setPostalCode] = useState<number | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [flag, setFlag] = useState<string | null>(null);
  const dispatch = useDispatch();
  const shippingForm = useSelector((state: RootState) => state.orderFormReducer.shippingForm);

  useEffect(() => {
    let shippingDetails: ShippingFormType = {
      name: name ? name : shippingForm ? shippingForm.name : '',
      address: billingAddress ? billingAddress : shippingForm ? shippingForm.address : '',
      postalCode: postalCode ? postalCode : shippingForm ? shippingForm.postalCode : 0,
      country: country ? country : shippingForm ? shippingForm.country : '',
      city: city ? city : shippingForm ? shippingForm.city : '',
      contactNumber: phoneNumber ? phoneNumber : shippingForm ? shippingForm.contactNumber : ''
    }
    dispatch(addShoppingFormDetails(shippingDetails));
  }, [name, billingAddress, city, postalCode, country, phoneNumber, countryCode]);

  const handleOnNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleOnBillingAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBillingAddress(e.target.value);
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

  return (
      <Row className='mt-3'>
        <Col xs={12}>
          <Form className='pr-0' noValidate validated={validated}>
            <Form.Group controlId="formGridName" className='mb-0'>
              <Form.Label className='mb-0'>Name*</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Name"
                  value={shippingForm ? shippingForm.name : ''}
                  required
                  onChange={handleOnNameChange}
              />
              <FormControl.Feedback type="invalid">
                <p className="font-weight-bold mb-0">Enter Name</p>
              </FormControl.Feedback>
            </Form.Group>
            <Form.Group controlId="formGridBillingAddress" className='mb-0'>
              <Form.Label className='mb-0'>Billing Address*</Form.Label>
              <Form.Control
                  type="text"
                  placeholder="Billing Address"
                  value={shippingForm ? shippingForm.address : ''}
                  required
                  onChange={handleOnBillingAddressChange}
              />
            </Form.Group>
            <Row className="mb-0">
              <Col md={4} className='form-group mb-0 pr-md-0'>
                <Form.Label className='mb-0'>City / suburb*</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="City / suburb"
                    value={shippingForm ? shippingForm.city : ''}
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
                              value={shippingForm ? shippingForm.postalCode : ''}
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
                    type="tel"
                    value={shippingForm ? shippingForm.contactNumber : ''}
                    onChange={handleOnPhoneNumberChange}
                    required
                />
                <FormControl.Feedback type="invalid">
                  <p className="font-weight-bold mb-0">Enter Contact
                    Number</p>
                </FormControl.Feedback>
              </InputGroup>
            </Form.Group>
          </Form>
        </Col>
      </Row>
  )
}

export default ChangeShippingAddress;
