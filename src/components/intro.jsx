import React from "react";
import styled from "styled-components";
import IntroImage from '../img/IntroImage.png';
import AnimatateShapes from "./animatateShapes.jsx";

const Container = styled.div`
    height: calc(100vh - 60px);
    display: flex;
    align-items: center;
    padding: 20px;
    @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }
`;
const Title = styled.h1`
    font-size: 60px;
    width: 60%;
    @media (max-width: 768px) {
    font-size: 22px;
    margin-left: -100px;
    margin-top: 80px;
    }
`;
const Description = styled.p`
    font-size: 26px;
    width: 60%;
    margin: 20px;
    @media (max-width: 768px) {
    font-size: 16px;
    margin-left: -100px;
    margin-top: 70px;
    }
`;
const Image = styled.img`
    width: 80%;
    margin-left: 100px;
    @media (max-width: 768px) {
    display: none;
    }
`;
const Right = styled.div`
    width: 40%;
    @media (max-width: 768px) {
    width: 10%;
    }
`;
const Left = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
`;

export default function Intro(){
    return(
        <Container>
            <Left>
                <Title>Lets`s make it more cool!</Title>
                <Description style={{fontWeight:'600'}}>
                <p>At Gikap international, we specialize in comprehensive fire protection solutions.
                From cutting-edge fire suppression systems to rapid emergency response and safety training.</p>
                </Description>
            </Left>
            <Right>
                <Image src={IntroImage}/>
            </Right>
            <AnimatateShapes/>
        </Container>
    );
}