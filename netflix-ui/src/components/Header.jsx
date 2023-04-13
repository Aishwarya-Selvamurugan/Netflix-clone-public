import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  return (
    <Container className="flex a-center j-between">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button
        onClick={() =>
          navigate(props.login === "Log In" ? "/signup" : "/login")
        }
      >
        {props.login === "Log In" ? "Sign Up" : "Sign In"}
      </button>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  margin-left: 8rem;
  margin-right: 8rem;
  .logo {
    img {
      height: 4rem;
    }
  }
  button {
    padding: 0.5rem 1rem;
    background-color: #e50914;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;
