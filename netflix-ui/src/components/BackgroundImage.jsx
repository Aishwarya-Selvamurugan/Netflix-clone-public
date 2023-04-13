import React from "react";
import background from "../assets/login.jpg";
import styled from "styled-components";

export default function BackgroundImage() {
  return (
    <Container>
      <img src={background} alt="background" />
    </Container>
  );
}

//10vh is equivalent to occupying 10% of entire visible screen height

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
