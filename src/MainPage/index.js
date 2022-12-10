import styled from "styled-components";
import React, { useState } from "react";
import "./index.scss";
import Card from "./card.png";

const Wrapper = styled.div`
  background-color: #A9A9A9; //todo
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
          <ListText>1. ACAN</ListText>
          <ListText>2. lie detector</ListText>
          <ListText>3. Red Hot Mama</ListText>
          <ListText>4. Drunk Magician</ListText>
          <ListText>5. Ace on top</ListText>
          <ListText>6. Ambitious Card Magic</ListText>
          <ListText>7. Out of this World</ListText>
          <ListText>8. Arobatic Ace</ListText>
          <ListText>9. Mental magic</ListText>
          <ListText>10. Smart Phone magic</ListText>


        </div>
        <div class="threeone">
          <MagicTitle className="title">Gambling Techniques</MagicTitle>
          <ListText>1. Casino Shuffle Sequence</ListText>  
          <ListText>2. Different grips by country</ListText>  
          <ListText>3. Ribbon spread</ListText>  
          <ListText>4. Dealing at Texas Hold'em</ListText>  
          <ListText>5. Fasle Shuffle</ListText> 
          <ListText>6. Nullifying the cut</ListText>  
          <ListText>7. Bottom Deal</ListText>  
          <ListText>8. How to gather the high cards from the shuffled cards</ListText>
          <ListText>9. Stacking the Deck</ListText>
          <ListText>10.Mucking cards</ListText>
          <ListText>11.How to manipulate the opponent's shuffled cards</ListText>
          <ListText>12.Three Card Monte</ListText>
          <ListText>13.Card Sping</ListText>
          <ListText>14.One hand Shuffle and Cut</ListText>
        </div>
      </div>
    </Wrapper>
  );
}

export default MainPage;
