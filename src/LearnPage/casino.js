import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Magic from "../Images/magic.jpeg";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./index.css";

const Wrapper = styled.div`
  background-color: white;
  /* width: 100%; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 48px;
  color: black;
  font-weight: 800;
  margin-top: 30px;
  text-align: center;
  margin-bottom: 30px;
`;

const ImageWrapper = styled.img`
  width: 800px;
  height: 300px;
`;

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Description = styled.div`
  font-size: 24px;
`;
function CasinoPage() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <Wrapper>
      <Title>Casino</Title>

      <Fade>
        {images.map((image, index) => (
          <div className="each-fade" key={index}>
            <ImageWrapper src={image}></ImageWrapper>
          </div>
        ))}
      </Fade>
      <DescriptionWrapper>
        <Description>dd</Description>
      </DescriptionWrapper>
    </Wrapper>
  );
}

export default CasinoPage;
