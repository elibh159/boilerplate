
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./style/style.scss";
import { useAuth } from "../../context/AuthContext";
import { AuthContextType } from "../../interface/authContextType";

const args = {
  bg: "dark",
  variant: "dark",
  expand: "md"
};
const AppHeader = () => {
  const auth = useAuth() as AuthContextType;
  return (
    <Navbar {...args} >
      <Container fluid>
        <Navbar.Brand href="/">🎸</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/playList">PlayList</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>

          </Nav>
          <Navbar.Text>
            <Link to="/">{"Hello " + auth.user}</Link>
            <Link to="/login">LogOut</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default React.memo(AppHeader);