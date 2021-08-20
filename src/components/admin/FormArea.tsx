import React, {useEffect, useState} from "react";
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import Select, {ValueType} from "react-select";
import {categoryOptions, perOptions} from "../../constants/categoryList";
import ProductPreview from "./ProductPreview";

const FormArea: React.FC = () => {
  const [displayOldPrice, setDisplayOldPrice] = useState<boolean>(false);
  const [name, setName] = useState<null | string>(null);
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [category, setCategory] = useState<null | string>(null);
  const [oldPrice, setOldPrice] = useState<number | null>(null);
  const [qty, setQty] = useState<string | null>(null);
  const [submitButtonStatus, setSubmitButtonStatus] = useState<boolean>(true);

  useEffect(() => {
    if (name === null || name === '' || productPrice === null || isNaN(productPrice) || category === null || qty === null) {
      setSubmitButtonStatus(true);
      return;
    }
    if (displayOldPrice && (oldPrice === null || isNaN(oldPrice))) {
      setSubmitButtonStatus(true);
      return;
    }
    setSubmitButtonStatus(false);
  }, [displayOldPrice, name, productPrice, category, oldPrice, qty]);

  const handleOnOldCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayOldPrice(e.target.checked);
    if (!e.target.checked) {
      setOldPrice(null);
    }
  }

  const handleOnName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleOnProductPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(parseInt(e.target.value));
  }

  const handleOnOldPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOldPrice(parseInt(e.target.value));
  }

  const handleOnSelectQty = (option: ValueType<any, false>) => {
    if (option) {
      setQty(option.value);
    } else {
      setQty(null);
    }
  }

  const handleSelectCategory = (option: ValueType<any, false>) => {
    if (option) {
      setCategory(option.value);
    } else {
      setCategory(null);
    }
  }

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('submit');
  }

  return (
      <Row className='create-form pt-4'>
        <Col lg={8} xs={12} md={6}>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group>
              <Form.Label>
                Name
                <sup className='text-danger'>*</sup>
              </Form.Label>
              <Form.Control type="text" onChange={handleOnName} value={name ? name : ''}/>
              <Form.Label className='pt-3'>Category<sup className='text-danger'>*</sup></Form.Label>
              <Select
                  value={categoryOptions.filter(option => option.value === category)}
                  options={categoryOptions}
                  onChange={handleSelectCategory}
                  isClearable={true}
                  isSearchable={true}
              />
            </Form.Group>

            <Form.Row>

              <Form.Group as={Col}>
                <Form.Label>
                  Product Price
                  <sup className='text-danger'>*</sup></Form.Label>
                <InputGroup>
                  <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Rs</InputGroup.Text>
                  </InputGroup.Prepend>
                  <Form.Control type="number" onChange={handleOnProductPrice}/>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>
                  Per
                  <sup className='text-danger'>*</sup></Form.Label>
                <Select
                    value={perOptions.filter(option => option.value === qty)}
                    options={perOptions}
                    onChange={handleOnSelectQty}
                    isClearable={true}
                    isSearchable={true}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Check type="checkbox" label="Old Price" onChange={handleOnOldCheckBox}/>
            </Form.Group>

            {displayOldPrice &&
            <Form.Label>
                Old Price
                <sup className='text-danger'>*</sup>
            </Form.Label>}
            {displayOldPrice &&
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Rs</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control type="number" onChange={handleOnOldPrice}/>
            </InputGroup>}


            <Button variant="primary" type="submit" className='my-3' disabled={submitButtonStatus}>Submit</Button>

          </Form>
        </Col>
        <Col xs={12} md={6} lg={4} className='px-0'>
          <ProductPreview qty={qty} oldPrice={oldPrice} name={name} price={productPrice} isOldPrice={displayOldPrice}/>
        </Col>
      </Row>
  );
}

export default FormArea;
