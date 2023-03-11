import styled from "styled-components";
import React, { useState } from "react";
import "./index.scss";
import Card from "../Images/card.png";
import { useNavigate, Link } from "react-router-dom";

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
          <Link to="/acan" target="_blank">
            <ListText>1. ACAN</ListText>
          </Link>

          <Link to="/detector" target="_blank">
            <ListText> 2. lie detector</ListText>
          </Link>

          <Link to="/mama" target="_blank">
            <ListText> 3. Red Hot Mama</ListText>
          </Link>

          <Link to="/drunk" target="_blank">
            <ListText> 4. Drunk Magician</ListText>
          </Link>

          <Link to="/top" target="_blank">
            <ListText> 5. Ace on top</ListText>
          </Link>

          <Link to="/ambitious" target="_blank">
            <ListText> 6. Ambitious Card Magic</ListText>
          </Link>

          <Link to="/out" target="_blank">
            <ListText> 7. Out of this World</ListText>
          </Link>

          <Link to="/arobatic" target="_blank">
            <ListText> 8. Arobatic Ace</ListText>
          </Link>

          <Link to="/mental" target="_blank">
            <ListText>9. Mental Magic</ListText>
          </Link>

          <Link to="/phone" target="_blank">
            <ListText> 10. Smart Phone Magic</ListText>
          </Link>
        </div>
        <div class="threeone">
          <MagicTitle className="title">Gambling Techniques</MagicTitle>

          <Link to="/casino">
            <ListText> 1. Casino Shuffle Sequence</ListText>
          </Link>

          <Link to="/grip">
            <ListText> 2. Different grips by country</ListText>
          </Link>

          <Link to="/ribbon">
            <ListText> 3. Ribbon spread</ListText>
          </Link>

          <Link to="/texas-holdem" target="_blank">
            <ListText> 4. Dealing at Texas Hold'em</ListText>
          </Link>

          <Link to="/false" target="_blank">
            <ListText> 5. Fasle Shuffle</ListText>
          </Link>

          <Link to="/nufflying" target="_blank">
            <ListText> 6. Nullifying the cut</ListText>
          </Link>

          <Link to="/bottom-deal" target="_blank">
            <ListText> 7. Bottom Deal</ListText>
          </Link>

          <Link to="/gather" target="_blank">
            <ListText>
              {" "}
              8. How to gather the high cards from the shuffled cards
            </ListText>
          </Link>

          <Link to="/stacking" target="_blank">
            <ListText> 9. Stacking the Deck</ListText>
          </Link>

          <Link to="/mucking" target="_blank">
            <ListText> 10.Mucking cards</ListText>
          </Link>

          <Link to="/manipulate" target="_blank">
            <ListText>
              {" "}
              11.How to manipulate the opponent's shuffled cards
            </ListText>
          </Link>

          <Link to="/spring" target="_blank">
            <ListText> 13.Card Spring</ListText>
          </Link>

          <Link to="/one-hand" target="_blank">
            <ListText> 14.One hand Shuffle and Cut</ListText>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}

export default MainPage;
