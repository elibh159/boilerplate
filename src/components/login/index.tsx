import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { TextError } from "../custom/TextError";
import { useAuth } from "../../context/AuthContext";
import { AuthContextType, SigninCallbacktype } from "../../interface/authContextType";
import {
  Button,
  Card,
  CardGroup,
  Col,
  Container,
  InputGroup,
  Row,
} from 'react-bootstrap';
import "./style/style.scss";

const Login = () => {
  const navigate = useNavigate();
  const auth = useAuth() as AuthContextType;
  const [initValues, setInitValues] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');
  const submitHandler = () => {
    auth.signin(initValues.username, initValues.password, (res: SigninCallbacktype) => {
      if (res.ok) {
        navigate('/home');
      } else if (res.result?.message) {
        setError(res.result.message);
      }
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

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Required'),
    password: Yup.string()
      .required("Password is required"),
  });

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
            <h1>Login</h1>
            <p className="text-muted">Sign In to your account</p>
            <div className='flex-bottom'>
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
              <Row>
                <Col md="6" className="d-grid gap-2">
                  <Button
                    color="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                </Col>

                <Col md="6">
                  {(error) && <p className="text-danger">{error}</p>}
                </Col>
              </Row>
            </div>
          </Form>
        </Formik>
      </Card>
    </CardGroup>
  );
};

export default Login;
