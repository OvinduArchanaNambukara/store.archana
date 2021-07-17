import React, {useState} from "react";
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {setLogInButtonStatus} from "../../store/actions/StatusActions";
import {useHistory} from "react-router-dom";

const LogInForm: React.FC = () => {
  const [isFormValidated, setIsFormValidated] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [check, setCheck] = useState<boolean | null>(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password)
    if (email === '' || email === null || password === '' || password === null) {
      setIsFormValidated(true);
    } else {
      alert('Log in successful');
      dispatch(setLogInButtonStatus(true));
      history.push('/');
    }
  }

  /**
   * when change the email set that value to email
   * @param e
   * @author Ovindu
   */
  const handleOnEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  /**
   * when change the password set that value to password
   * @param e
   * @author Ovindu
   */
  const handleOnPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }

  /**
   *when check button click set check to true or false
   * @param e
   * @author Ovindu
   */
  const handleOnCheckBtnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheck(e.target.checked);
  }

  return (
      <Row className='login-form'>
        <Col xs={12}>
          <Form noValidate validated={isFormValidated} onSubmit={handleOnSubmit} className='pb-3'>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter email" required onChange={handleOnEmailChange}
                            value={email ? email : ''}/>
              <FormControl.Feedback type="invalid">
                <p className="font-weight-bold">Enter valid email</p>
              </FormControl.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required onChange={handleOnPasswordChange}
                            value={password ? password : ''}/>
              <FormControl.Feedback type="invalid">
                <p className="font-weight-bold">Enter password</p>
              </FormControl.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className='justify-content-center d-flex'>
              <Form.Check type="checkbox" label="Remember Password" onChange={handleOnCheckBtnClick}/>
            </Form.Group>
            <Form.Group className='justify-content-center d-flex'>
              <Button variant="primary" type="submit" className='px-4'>Log In</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
  );
}

export default LogInForm;
