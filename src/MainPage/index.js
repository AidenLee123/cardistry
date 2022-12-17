import styled from "styled-components";
import React, { useState } from "react";
import "./index.scss";
import Card from "./card.png";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  background-color: #a9a9a9; //todo
  height: 100%;
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

const ListText = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  margin-top: 20px;
  font-size: 22px;
  color: #8a8a8a;
`;

function MainPage() {
  const navigate = useNavigate();

  const navigateToLearnMorePage = (type) => {
    console.log(type);
    navigate(type);
  };
  return (
    <Wrapper>
      <Title>Expert at card</Title>
      <div class="threeholder">
        <div class="threeone">
          <MagicTitle className="title">Magic</MagicTitle>
          <ListText onClick={() => navigateToLearnMorePage("/acan")}>
            1. ACAN
          </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/detector")}>
            2. lie detector
          </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/mama")}>
            3. Red Hot Mama
          </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/drunk")}>
            4. Drunk Magician
          </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/top")}>
            5. Ace on top
          </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/ambitious")}>
            6. Ambitious Card Magic
          </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/out")}>
            7. Out of this World
          </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/arobatic")}>
            8. Arobatic Ace
          </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/mental")}>
            9. Mental Magic
          </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/phone")}>
            10. Smart Phone Magic
          </ListText>
          
        </div>
        <div class="threeone">
          <MagicTitle className="title">Gambling Techniques</MagicTitle>
          
            <ListText onClick={() => navigateToLearnMorePage("/Casin")}>
            1. Casino Shuffle Sequence</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/grips")}>
            2. Different grips by country</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/ribbon")}>
            3. Ribbon spread</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/texas-holdem")}>
            4. Dealing at Texas Hold'em</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/false")}>
            5. Fasle Shuffle</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/nufflying")}>
            6. Nullifying the cut</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/bottom-deal")}>
            7. Bottom Deal</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/gather")}>
            8. How to gather the high cards from the shuffled cards
            </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/stacking")}>
            9. Stacking the Deck</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/mucking")}>
            10.Mucking cards</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/manipulate")}>
            11.How to manipulate the opponent's shuffled cards
          </ListText>
          <ListText onClick={() => navigateToLearnMorePage("/monte")}>
            12.Three Card Monte</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/spring")}>
            13.Card Spring</ListText>
          <ListText onClick={() => navigateToLearnMorePage("/one-hand")}>
            14.One hand Shuffle and Cut</ListText>
        </div>
      </div>
    </Wrapper>
  );
}

export default MainPage;
