import styled from "styled-components";
import React, { useState } from "react";
import RRSR1 from "../Images/rrsr1.jpeg";
import RRSR2 from "../Images/rrsr2.jpeg";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./index.css";


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

const ImageWrapper = styled.img`
  width: 800px;
  height: 300px;
`;


  function CasinoPage() {


  const images = [
   `${RRSR1}`,
   `${RRSR2}`,

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

    
    </Wrapper>
  );
}

export default CasinoPage;
