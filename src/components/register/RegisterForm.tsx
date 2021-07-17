import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {setLogInButtonStatus} from "../../store/actions/StatusActions";
import {Button, Col, Form, FormControl, Row} from "react-bootstrap";

const RegisterForm: React.FC = () => {
  const [isFormValidated, setIsFormValidated] = useState<boolean>(false);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [confirmPassword, setConfirmPassword] = useState<string | null>(null);
  const [disable, setDisable] = useState<boolean>(true);
  const [match, setMatch] = useState<boolean>(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email === '' || email === null || password === '' || password === null || firstName === '' ||
        firstName === null || lastName === null || lastName === '' || confirmPassword === null
        || confirmPassword === '') {
      setIsFormValidated(true);
      return
    }
    if (password !== confirmPassword && confirmPassword !== null && confirmPassword !== '') {
      setMatch(true);
      return;
    } else {
      alert(`registered`);
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
   * when change the first name set that value to firstName
   * @param e
   * @author Ovindu
   */
  const handleOnFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  }
  /**
   * when change the last name set that value to lastName
   * @param e
   * @author Ovindu
   */
  const handleOnLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }

  /**
   * when change the confirm password set that value to confirmPassword
   * @param e
   * @author Ovindu
   */
  const handleOnConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    setMatch(false);
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
   *when check button disable set check to true or false
   * @param e
   * @author Ovindu
   */
  const handleOnCheckBtnClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisable(!e.target.checked);
  }

  return (
      <Row className='register-form'>
        <Col xs={12}>
          <Form noValidate validated={isFormValidated} onSubmit={handleOnSubmit} className='pb-3'>
            <Row>
              <Form.Group controlId="formBasicEmail" as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" required onChange={handleOnFirstNameChange}
                              value={firstName ? firstName : ''}/>
                <FormControl.Feedback type="invalid">
                  <p className="font-weight-bold mb-0">Enter first name</p>
                </FormControl.Feedback>
              </Form.Group>
              <Form.Group controlId="formBasicEmail" as={Col} className='pl-0'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" required onChange={handleOnLastNameChange}
                              value={lastName ? lastName : ''}/>
                <FormControl.Feedback type="invalid">
                  <p className="font-weight-bold mb-0">Enter last name</p>
                </FormControl.Feedback>
              </Form.Group>
            </Row>
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
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required onChange={handleOnConfirmPasswordChange}
                            value={confirmPassword ? confirmPassword : ''}/>
              <FormControl.Feedback type="invalid">
                <p className="font-weight-bold">Enter confirm password</p>
              </FormControl.Feedback>
              {match && <small className='text-danger font-weight-bold'>Passwords not matched</small>}
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox" className='justify-content-center d-flex'>
              <Form.Check type="checkbox" label="I accept Terms of Use and Privacy Policy"
                          onChange={handleOnCheckBtnClick}/>
            </Form.Group>
            <Form.Group className='justify-content-center d-flex'>
              <Button variant="primary" type="submit" className='px-4' disabled={disable}>Register</Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
  );
}

export default RegisterForm;
