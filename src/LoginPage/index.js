import styled from "styled-components"
import React, {useState} from "react"
import Ribbonspread from "./ribbon.png"

const Wrapper =  styled.div`
width: 100vw;
height: 100vh;
background-image:url(${Ribbonspread});
background-size: cover;
display: flex;
`;

const Title = styled.h1`
font-size:50px;
color: white;
`

      
function LoginPage() {
    return (<Wrapper><Title>Expert at card table</Title>
    </Wrapper>)
}

export default LoginPage;