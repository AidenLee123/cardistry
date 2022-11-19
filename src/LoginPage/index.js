import styled from "styled-components";
import React, { useState } from "react";
import Ribbonspread from "./ribbon.png";
import { useNavigate } from "react-router-dom";

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
const Input1 = styled.input`
  font-size: 24px;
  width: 80%;
  margin-bottom: 20px;
  border: none;
  height: 35px;
  background-color: white;
  padding-left: 10px;
`;

const Button1 = styled.button`
  width: 200px;
  height: 40px;
  border-radius: 10px;
  border: 10px solid AliceBlue;
  margin-top: 50px;
`;
function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    password: "",
  });

  const onChangeUser = (e) => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const navigateToMainPage = () => {
    if (user.id == "aiden" && user.password == "aiden") {
      navigate("/main");
    } else {
      alert("Wrong Id and Password!");
    }
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
        <Label>Password</Label>
        <Input1
          name="password"
          value={user.password}
          type="password"
          onChange={onChangeUser}
        ></Input1>
        <Button1 onClick={navigateToMainPage}>
          다음페이지로 넘어가는 버튼
        </Button1>
      </LabelWrapper>
    </Wrapper>
  );
}

export default LoginPage;
