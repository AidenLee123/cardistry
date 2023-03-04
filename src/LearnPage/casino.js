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
      <DescriptionWrapper>
        <Description>양손의 중지를 맞대어 타원형을 만든다</Description>
        <Description>그대로 손을 내려 카드 주변을 감싼다</Description>
        <Description>오른손의 중지로 카드의 반을 똑땐다</Description>
        <Description>중지로 땐 뭉치를 오른쪽으로 가져온다</Description>
        <Description>마술사의 기준으로 V자를 만든다</Description>
        <Description>엄지와 중지로 천사를 감싼다</Description>
        <Description>양손의 손날이 끝에있는 천사를 누른다</Description>





      </DescriptionWrapper>
    </Wrapper>
  );
}

export default CasinoPage;
