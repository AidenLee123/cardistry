import styled from "styled-components";
import React, { useState } from "react";
import RRSR1 from "../Images/casino/rrsr1.jpeg";
import RRSR2 from "../Images/casino/rrsr2.jpeg";
import RRSR3 from "../Images/casino/rrsr3.jpeg";
import RRSR4 from "../Images/casino/rrsr4.jpeg";
import RRSR5 from "../Images/casino/rrsr5.jpeg";
import RRSR6 from "../Images/casino/rrsr6.jpeg";

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
  margin-bottom: 60px;
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
function CasinoPage() {
  const images = [
    `${RRSR1}`,
    `${RRSR2}`,
    `${RRSR3}`,
    `${RRSR4}`,
    `${RRSR5}`,
    `${RRSR6}`,
  ];
  const descriptions = [
    ' "양손의 중지를 맞대어 타원형을 만든다"',
    '"그대로 손을 내려 카드 주변을 감싼다"',
    '"오른손의 중지로 카드의 반을 똑땐다"',
    '"중지로 땐 뭉치를 오른쪽으로 가져온다"',
    '"마술사의 기준으로 V자를 만든다"',
    '"엄지와 중지로 천사를 감싼다"',
    '"양손의 손날이 끝에있는 천사를 누른다"',
  ];

  return (
    <Wrapper>
      <Title>Casino</Title>
      <Fade>
        {images.map((image, index) => (
          <SlideWrapper>
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

export default CasinoPage;
