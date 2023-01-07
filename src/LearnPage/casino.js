import styled from "styled-components";
import React, { useState } from "react";
import RRSR1 from "../Images/rrsr1.jpeg";
import RRSR2 from "../Images/rrsr2.jpeg";
import RRSR3 from "../Images/rrsr3.jpeg";
import RRSR4 from "../Images/rrsr4.jpeg";
import RRSR5 from "../Images/rrsr5.jpeg";
import RRSR6 from "../Images/rrsr6.jpeg";




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


  function CasinoPage() {


  const images = [
   `${RRSR1}`,
   `${RRSR2}`,
   `${RRSR3}`,
   `${RRSR4}`,
   `${RRSR5}`,
   `${RRSR6}`,

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
