import styled from "styled-components";
import React, { useState } from "react";
import Ribbonspread from "./ribbon.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${Ribbonspread});
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  color: white;
  margin-bottom: 100px;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 24px;
  color: white;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Input = styled.input`
  font-size: 24px;
  width: 80%;
  margin-bottom: 20px;
  border: none;
  height: 35px;
  background-color: white;
  padding-left: 10px;
`;

function LoginPage() {
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const onChangeUser = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    console.log(user);
  };

  return (
    <Wrapper>
      <Title>Expert at card table</Title>
      <LabelWrapper>
        <Label>ID</Label>
        <Input
          name="id"
          value={user.id}
          type="text"
          onChange={onChangeUser}
        ></Input>
      </LabelWrapper>
    </Wrapper>
  );
}

export default LoginPage;
