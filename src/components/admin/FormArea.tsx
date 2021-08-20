import React, {useState} from "react";
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import Select from "react-select";
import {categoryOptions} from "../../constants/categoryList";
import ProductPreview from "./ProductPreview";

const FormArea: React.FC = () => {
  const [displayDiscount, setDisplayDiscount] = useState<boolean>(false);

  const handleOnDiscountCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayDiscount(e.target.checked);
  }

  return (
      <Row className='create-form pt-4'>
        <Col lg={8} xs={12} md={6}>
          <Form>
            <Form.Group>
              <Form.Label>
                Name
                <sup className='text-danger'>*</sup>
              </Form.Label>
              <Form.Control type="text"/>
              <Form.Label className='pt-3'>Category<sup className='text-danger'>*</sup></Form.Label>
              <Select
                  options={categoryOptions}
              />
            </Form.Group>

            <Form.Row>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  Product Price
                  <sup className='text-danger'>*</sup></Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Rs</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="number"/>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>
                  Per
                  <sup className='text-danger'>*</sup></Form.Label>
                <Select
                    options={categoryOptions}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Check type="checkbox" label="Discount" onChange={handleOnDiscountCheckBox}/>
            </Form.Group>

            {displayDiscount &&
            <Form.Label>
                Discount Price
                <sup className='text-danger'>*</sup>
            </Form.Label>}
            {displayDiscount &&
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Rs</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="number"/>
            </InputGroup>}


            <Button variant="primary" type="submit" className='my-3'>
              Submit
            </Button>

          </Form>
        </Col>
        <Col xs={12} md={6} lg={4}>
          <ProductPreview/>
        </Col>
      </Row>
  );
}

export default FormArea;
