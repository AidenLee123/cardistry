import styled from "styled-components";
import React, { useState } from "react";
import "./index.scss";
import Card from "./card.png";

const Wrapper = styled.div`
  background-color: #ebd681;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 70px;
  color: Black;
  margin-bottom: 100px;
  border-bottom: 4px solid black;
`;

const MagicTitle = styled.div`
  width: 200px;
  font-size: 30px;
  font-weight: bold;
  margin-top: 45px;
  margin-left: 80px;
  /* text-align: center; */
  color: white;
`;

const ListText = styled.p`
  width: 200px;
  text-align: center;
  margin-top: 20px;
  font-size: 22px;
  color: #8a8a8a;
  letter-spacing: 1px;
`;

function MainPage() {
  return (
    <Wrapper>
      <Title>Expert at card</Title>
      <div class="threeholder">
        <div class="threeone">
          <MagicTitle className="title">Magic</MagicTitle>
          <ListText>1. AAAA</ListText>
          <ListText>1. AAAA</ListText>
          <ListText>1. AAAA</ListText>
          <ListText>1. AAAA</ListText>
        </div>
        <div class="threeone">
          <MagicTitle className="title">TITLE 1</MagicTitle>
        </div>
      </div>
    </Wrapper>
  );
}

export default MainPage;
