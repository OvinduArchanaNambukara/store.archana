import React, {FormEvent, useState} from 'react';
import {Button, Col, Form, FormControl, InputGroup, Row} from "react-bootstrap";

const CouponArea: React.FC = () => {

  const [discountCode, setDiscountCode] = useState<string | null>(null);
  const [isFormValidate, setFormValidate] = useState<boolean>(false);
  const [wrongDiscountCode, setWrongDiscountCode] = useState<boolean>(false);

  const discountCodes: string[] = ['D488WSF', 'GH587', 'DE875S'];

  const handleDiscountCodeChange = (code: string) => {
    setDiscountCode(code);
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (discountCode === '' || discountCode === null) {
      setFormValidate(true);
      return;
    }
    if (!discountCodes.includes(discountCode)) {
      setWrongDiscountCode(true);
      setFormValidate(true);
    }
  }

  return (
      <Row className='discountArea px-3 px-md-0'>
        <Col xl={{span: 8, offset: 4}} md={{span: 6, offset: 6}} xs={12}>
          <Form onSubmit={handleSubmit} validated={isFormValidate || wrongDiscountCode} noValidate>
            <Form.Group>
              <Row>
                <Col xl={{span: 4, offset: 2}} xs={12} className='pt-2'>
                  <p className='float-none text-center float-md-right'>Have a discount code?</p>
                </Col>
                <Col xl={4} xs={12} className='px-0 pr-md-3 px-xl-0'>
                  <InputGroup className="mb-3">
                    <FormControl
                        type='text'
                        required
                        spellCheck="false"
                        autoComplete="off"
                        value={discountCode ? discountCode : ''}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                          handleDiscountCodeChange(e.target.value)
                        }}
                    />
                    <FormControl.Feedback type="invalid">
                      <p className="font-weight-bold mb-0">{
                        wrongDiscountCode ? 'Discount code is wrong' : 'Please enter discount code'
                      }</p>
                    </FormControl.Feedback>
                  </InputGroup>
                </Col>
                <Col xl={2} xs={12} className='pr-0 pr-md-3'>
                  <Button variant="success" className='float-right'
                          type='submit'>Apply</Button>
                </Col>
              </Row>
            </Form.Group>
          </Form>
        </Col>
      </Row>
  )
}

export default CouponArea;
