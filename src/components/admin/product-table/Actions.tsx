import React, {useState} from "react";
import {BiEdit, BiTrash} from "react-icons/all";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import {toast} from "react-toastify";
import {ApolloError, FetchResult, useMutation} from "@apollo/client";
import {DELETE_PRODUCT} from "../../../graphql/mutation";
import {GET_ELECTRONICS, GET_FOOD, GET_FRUITS, GET_MEAT, GET_PHARMACY, GET_VEGETABLES} from "../../../graphql/query";

type ActionProps = {
  tokenKey: string
  category: string
  productId: string
}

const Actions: React.FC<ActionProps> = (props) => {
  const {tokenKey, category, productId} = props;
  const [show, setShow] = useState<boolean>(false);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const handleOnTrashClick = () => {
    setShow(true);
  }

  const handleOnDelete = async () => {
    const res = await axios.delete('https://api.bitsandbytes.me/deleteImage', {
      data: {
        key: tokenKey
      }
    });
    if (res.status !== 200) {
      toast.error('Something wrong');
      setShow(false);
      return;
    }
    deleteProduct({
      variables: {
        id: productId,
        category: category.toUpperCase()
      },
      refetchQueries: [{query: GET_VEGETABLES}, {query: GET_FRUITS}, {query: GET_MEAT}, {query: GET_PHARMACY},
        {query: GET_FOOD}, {query: GET_ELECTRONICS}]
    })
        .then((res: FetchResult) => {
          toast.success('Product Deleted');
          setShow(false);
        })
        .catch((err: ApolloError) => {
          toast.error('Error');
          setShow(false);
        })
  }

  const handleOnClose = () => {
    setShow(false);
  }

  return (
      <React.Fragment>
        <BiEdit className='text-warning'/>
        <BiTrash className='text-danger mx-2' onClick={handleOnTrashClick}/>

        <Modal show={show} onHide={handleOnClose} onEscapeKeyDown={handleOnClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure want to delete this</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleOnClose}>
              No
            </Button>
            <Button variant="success" onClick={handleOnDelete}>
              Yes, Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
  );
}

export default Actions;
