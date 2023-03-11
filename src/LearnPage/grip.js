import styled from "styled-components";
import React, { useState } from "react";
import GRIP1 from "../Images/grip/grip1.jpeg";
import GRIP2 from "../Images/grip/grip2.jpeg";
import GRIP3 from "../Images/grip/grip3.jpeg";

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

function GripPage() {
  const images = [`${GRIP1}`, `${GRIP2}`, `${GRIP3}`];
  const descriptions = [
    ' "메카닉 그립"',
    '"그대로 손을 내려 카드 주변을 감싼다"',
    '"오른손의 중지로 카드의 반을 똑땐다"',
    '"중지로 땐 뭉치를 오른쪽으로 가져온다"',
    '"마술사의 기준으로 V자를 만든다"',
    '"엄지와 중지로 천사를 감싼다"',
    '"양손의 손날이 끝에있는 천사를 누른다"',
  ];

  const titles = ["HHH", "HHH", "HHH"];

  return (
    <Wrapper>
      <Title>Grip</Title>
      <Fade>
        {images.map((image, index) => (
          <SlideWrapper>
            <ImageDescription>{titles[index]}</ImageDescription>
            <div className="each-fade" key={index}>
              <ImageWrapper src={image}></ImageWrapper>
            </div>
            <Description>{descriptions[index]}</Description>
          </SlideWrapper>
        ))}
      </Fade>
    </Wrapper>
  );
}

export default GripPage;
