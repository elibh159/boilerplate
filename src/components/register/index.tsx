import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useAuth } from "../../context/AuthContext";
import { AuthContextType, SigninCallbacktype } from "../../interface/authContextType";
import { TextError } from "../custom/TextError";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  InputGroup,
  Row,
  Spinner
} from 'react-bootstrap';
import { validationSchema } from "./validationSchema";
import { registerApi } from '../../services';
import "./style/style.scss";

const Register = () => {
  const { mutate: mutateRegister, isLoading, isSuccess, isError } = useMutation(registerApi);
  const auth = useAuth() as AuthContextType;
  const navigate = useNavigate();
  const [initValues, setInitValues] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
    passwordConfirmation: '',
  });
  const [loginError, setLoginError] = useState('');
  useEffect(() => {
    if (isSuccess) {
      auth.signin(initValues.username, initValues.password, (res: SigninCallbacktype) => {
        if (res.ok) {
          navigate('/home');
        } else if (res.result?.message) {
          setLoginError(res.result.message);
        }
      });
    }
  }, [isSuccess]);
  const submitHandler = () => {
    mutateRegister(
      {
        first_name: initValues.firstname,
        last_name: initValues.lastname,
        password: initValues.password,
        username: initValues.username
      });
  };


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    setInitValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };



  return (

    <CardGroup>
      <Card className="p-4">
        <Formik
          validationSchema={validationSchema}
          initialValues={initValues}
          onSubmit={submitHandler}
          enableReinitialize
        >
          <Form>
            <Container className="logo-container">
            </Container>
            <h1>Register</h1>
            <p className="text-muted">Register your account</p>
            {isLoading && <Spinner color="success" />}
            <InputGroup className="mb-3">
              <div className="input-group">

                <Field
                  name="firstname"
                  value={initValues.firstname}
                  type="text"
                  placeholder="First Name"
                  autoComplete="firstname"
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <ErrorMessage
                name="firstname"
                component={TextError}
                className="invalid-feedback"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <div className="input-group">

                <Field
                  name="lastname"
                  value={initValues.lastname}
                  type="text"
                  placeholder="Last Name"
                  autoComplete="lastname"
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <ErrorMessage
                name="lastname"
                component={TextError}
                className="invalid-feedback"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <div className="input-group">

                <Field
                  name="username"
                  value={initValues.username}
                  type="text"
                  placeholder="Username"
                  autoComplete="username"
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <ErrorMessage
                name="username"
                component={TextError}
                className="invalid-feedback"
              />
            </InputGroup>
            <InputGroup className="mb-4">
              <div className="input-group">
                <Field
                  name='password'
                  value={initValues.password}
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <ErrorMessage
                name="password"
                component={TextError}
                className="invalid-feedback"
              />
            </InputGroup>
            <InputGroup className="mb-4">
              <div className="input-group">
                <Field
                  name='passwordConfirmation'
                  value={initValues.passwordConfirmation}
                  type="password"
                  placeholder="Password Confirmation"
                  onChange={handleInputChange}
                  className="form-control"
                />
              </div>
              <ErrorMessage
                name="passwordConfirmation"
                component={TextError}
                className="invalid-feedback"
              />
            </InputGroup>
            <Row>
              <Col md="6" className="d-grid gap-2">
                <Button
                  color="primary"
                  type="submit"
                >
                  Register
                </Button>
              </Col>

              <Col md="6">
                {(isError) && <p className="text-danger"> server error</p>}
                {(loginError) && <p className="text-danger">{loginError}</p>}
              </Col>
            </Row>
          </Form>
        </Formik>
      </Card>
    </CardGroup>
  );
};

export default Register;
