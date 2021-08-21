import React, {useEffect, useState} from "react";
import {Button, Col, Form, InputGroup, Row} from "react-bootstrap";
import Select, {ValueType} from "react-select";
import {categoryOptions, perOptions} from "../../constants/categoryList";
import ProductPreview from "./ProductPreview";
import {blogToFile} from "../../functions/ProcessCroppedImage";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";
import axios, {AxiosError, AxiosResponse} from "axios";
import {useMutation} from "@apollo/client";
import {ADD_PRODUCT} from "../../graphql/mutation";

const FormArea: React.FC = () => {
  const [displayOldPrice, setDisplayOldPrice] = useState<boolean>(false);
  const [name, setName] = useState<null | string>(null);
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [category, setCategory] = useState<null | string>(null);
  const [oldPrice, setOldPrice] = useState<number | null>(null);
  const [qty, setQty] = useState<string | null>(null);
  const [s3Path, setS3Path] = useState<string | null>(null);
  const [submitButtonStatus, setSubmitButtonStatus] = useState<boolean>(true);
  const croppedImgSrc = useSelector((state: RootState) => state.adminReducer.cropImageSrc);
  const [addProduct] = useMutation(ADD_PRODUCT);

  useEffect(() => {
    if (name === null || name === '' || productPrice === null || isNaN(productPrice) || category === null ||
        qty === null || croppedImgSrc === null) {
      setSubmitButtonStatus(true);
      return;
    }
    if (displayOldPrice && (oldPrice === null || isNaN(oldPrice))) {
      setSubmitButtonStatus(true);
      return;
    }
    setSubmitButtonStatus(false);
  }, [displayOldPrice, name, productPrice, category, oldPrice, qty, croppedImgSrc]);

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
      setS3Path(option.s3Path);
    } else {
      setCategory(null);
    }
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!croppedImgSrc) {
      return;
    }
    const file: File = blogToFile(croppedImgSrc);
    const options = {
      headers: {
        'Content-Type': file.type
      }
    };
    const res = await axios.post('https://api.bitsandbytes.me/uploadImage', {
      key: `images/products/${s3Path}/${file.name}`,
      content_type: file.type
    })

    await axios.put(res.data, file, options)
        .then((response: AxiosResponse) => {
          addProduct({
            variables: {
              name: name,
              image: file.name,
              currentPrice: productPrice,
              key: `images/products/${s3Path}/${file.name}`,
              qty: qty,
              category: category,
              old_price: oldPrice
            }
          });
        })
        .catch((err: AxiosError) => console.log(err));
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
