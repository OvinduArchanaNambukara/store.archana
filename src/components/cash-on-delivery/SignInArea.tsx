import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../store/reducers/RootReducer";

const SignInArea: React.FC = () => {
  const history = useHistory();
  const user = useSelector((state: RootState) => state.statusReducer.role);

  const handleOnClick = () => {
    history.push('/login');
  }

  return (
      <React.Fragment>
        {!user &&
        <Row className='border signInArea pl-0 pl-md-3 ml-0 mr-0 py-2 mb-1'>
            <Col xs={6} className='pt-3 pl-lg-0 pr-0'>
                <p className='pl-1'>Already have an account?</p>
            </Col>
            <Col xs={6} className='pt-md-2 pt-4 pl-lg-5'>
                <Button variant="success" className='float-lg-left float-right py-1 mt-xl-1'
                        type='submit' onClick={handleOnClick}>Sign in</Button>
            </Col>
        </Row>}
      </React.Fragment>

  )
}

export default SignInArea;
