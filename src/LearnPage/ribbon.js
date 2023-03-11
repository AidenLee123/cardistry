import styled from "styled-components";
import React, { useState } from "react";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./index.css";

const Wrapper = styled.div`
  background-color: black;
  /* width: 100%; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 100px;
  color: white;
  font-family: "Luckiest Guy", cursive;
  font-weight: 800;
  margin-top: 30px;
  text-align: center;
  margin-bottom: 10px;
  border-bottom: 3px solid;
`;

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageWrapper = styled.img`
  width: 800px;
  height: 300px;
`;

const Description = styled.div`
  font-size: 24px;
  font-family: "Roboto Mono", monospace;
  margin-top: 40px;
  text-align: center;
  font-weight: 800;
  color: white;
`;

const ImageDescription = styled.div`
  font-size: 50px;
  font-family: cursive;
  font-weight: 700;
  text-align: center;
  color: white;
  margin-bottom: 30px;
`;

function RibbonPage() {
  const images = [];
  const descriptions = [];

  const titles = [];

  return (
    <Wrapper>
      <Title>Ribbon</Title>

      <Fade>
        {images.map((image, index) => (
          <SlideWrapper>
            <ImageDescription>{titles[index]}</ImageDescription>
            <div className="each-fade" key={index}>
              <ImageWrapper src={image.source}></ImageWrapper>
            </div>
            <Description>{descriptions[index]}</Description>
          </SlideWrapper>
        ))}
      </Fade>
    </Wrapper>
  );
}

export default RibbonPage;
