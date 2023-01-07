import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Magic from "../Images/magic.jpeg";
import ImageSlider from "./imageSlider";

const Wrapper = styled.div`
  background-color: white;
  height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
`;

const Title = styled.div`
  font-size: 48px;
  color: black;
  font-weight: 800;
  margin-top: 30px;
  text-align: center;
`;

function CasinoPage() {
  const slides = [
    { url: `${Magic}`, title: "Magic" },
    { url: `${Magic}` },
    { url: `${Magic}` },
  ];
  const containerStyle = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <Wrapper>
      <Title>Casino</Title>
      <div style={containerStyle}>
        <ImageSlider slides={slides}></ImageSlider>
      </div>
    </Wrapper>
  );
}

export default CasinoPage;
