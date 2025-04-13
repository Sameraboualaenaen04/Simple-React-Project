import React from "react";
import styled from "styled-components";
import Aboutimg from "../img/Aboutimg.jpg";

const Container = styled.div`
   display: flex;
   align-items: center;
`;
const Img = styled.img`
   width: 80%;  
   border-radius: 30px;
   @media (max-width: 768px) {
       width: 100%;
       margin-left:42px;
       height: 300px;
   }
`;
const Title = styled.h2`
    font-size: 50px;
    @media (max-width: 768px) {
    font-size: 28px;
    margin-top: -30px;
   }
`;
const Descriptinon = styled.p`
    font-size: 26px;
    @media (max-width: 768px) {
    font-size: 14px;
   }
`;
const Left = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   flex-direction: column;
   @media (max-width: 768px) {
       width: 40%;
   }
`;
const Right = styled.div`
   width: 60%;
`;


export default function About(){
    return(
        <Container>
            <Left>
              <Title>Who us?</Title>
              <Descriptinon>
              Established in 2005, our company has grown into a trusted industry leader, 
              delivering innovative, reliable 
              fire safety solutions with dedication. 
              <br />
              We prioritize customer satisfaction, invest in advanced technology,
              <br />
              and train our team regularly to ensure excellence. 
              <br />
              Our commitment extends beyond about safeguarding 
              <br />
              families, communities, and futures every single day.
              </Descriptinon>
            </Left>
            <Right>
              <Img src={Aboutimg}/>
            </Right>
        </Container>
    );
}