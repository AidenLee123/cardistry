import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RRSR1 from "../Images/rrsr1.jpeg";
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
    { url: `${RRSR1}`, title: "rrsr1" },
    { url: `${RRSR1}` },
    { url: `${RRSR1}` },
  ];

  function CasinoPage() {
    const slides = [
      { url: `${RRSR2}`, title: "rrsr2" },
      { url: `${RRSR2}` },
      { url: `${RRSR2}` },
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
