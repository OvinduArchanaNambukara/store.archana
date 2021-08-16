import React, {useState} from 'react'
import {Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";

type ChangeShippingAddressProps = {
  validated: boolean
}

const ChangeShippingAddress: React.FC<ChangeShippingAddressProps> = (props) => {

  const {validated} = props;

  const [name, setName] = useState<string | null>(null);
  const [billingAddress, setBillingAddress] = useState<string | null>(null);
  const [city, setCity] = useState<string | null>(null);
  const [postalCode, setPostalCode] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("+94");

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
    setPostalCode(e.target.value);
  }

  const handleOnCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
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
                  value={name ? name : ''}
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
                  value={billingAddress ? billingAddress : ''}
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
                    value={city ? city : ''}
                    onChange={handleOnCityChange}
                    required
                />
                <FormControl.Feedback type="invalid">
                  <p className="font-weight-bold mb-0">Enter City/suburb</p>
                </FormControl.Feedback>
              </Col>
              <Col md={4} className='form-group mb-0 pr-md-0'>
                <Form.Label className='mb-0'>Postal Code*</Form.Label>
                <Form.Control type="text"
                              pattern="[0-9]*"
                              placeholder="Postal Code"
                              value={postalCode ? postalCode : ''}
                              onChange={handleOnPostalCodeChange}
                              required
                />
                <FormControl.Feedback type="invalid">
                  <p className="font-weight-bold mb-0">Enter Postal code</p>
                </FormControl.Feedback>
              </Col>
              <Col md={4} className='form-group mb-0'>
                <Form.Label className='mb-0'>Country*</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Country"
                    value={country ? country : ''}
                    onChange={handleOnCountryChange}
                    required
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
                  <InputGroup.Text>
                    <div className='flag'>
                      <img
                          src='https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg'
                          className='pr-1'
                          alt="sri lanka"
                      />
                    </div>
                    +94
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                    type="tel"
                    value={phoneNumber}
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
