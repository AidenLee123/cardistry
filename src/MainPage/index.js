import styled from "styled-components";
import React, { useState } from "react";

const Wrapper = styled.div`
  background-color: white;
  height: 100vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  `
  const Title = styled.h1`
font size: 100px;
color:Black;
margin-bottom:100px;
`

const MiddleWrapper = styled.div`
width: 100%;
display:flex;
flex-direction: row;
`;

const LeftWrapper = styled.div`
width: 50%;
text-align:center;
`;
const MagicTitle=styled.div`
font-size: 35px;
`;
const Text = styled.div`
font-size: 18px;
`;
const RightWrapper = styled.div`
width: 50%;
text-align:center;
`;
const GamblingtechniquesTitle = styled.div`
font-size:35px;
`;
function MainPage() {
  return <Wrapper>
          <Title>Expert at card table</Title>
          <MiddleWrapper>
          <LeftWrapper>
            <MagicTitle>Magic</MagicTitle>
            
            <Text>1.Ace on top</Text>
            <Text>2. How to change 666666 to 999999!</Text>
            <Text>3. How to make make my phone number by other people's personal information</Text>
            <Text>4. Acaan</Text>
            <Text>5. How to match the card by reading other people's mind</Text>
            <Text>6.Ambitious</Text>
            <Text>7.Counthing the Aces</Text>
            <Text>8.King assembly</Text>

            </LeftWrapper>

          <RightWrapper>
          <GamblingtechniquesTitle>Gambling Techniques</GamblingtechniquesTitle>
          </RightWrapper>

          </MiddleWrapper>

          </Wrapper>;
}

export default MainPage;
