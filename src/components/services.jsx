import React from "react";
import styled from'styled-components';
import serviceImg from '../img/serviceImg.jpg'

const Container = styled.div`
   display: flex;
   align-items: center;
`;
const Img = styled.img`
   width: 80%;  
   border-radius: 30px;
   @media (max-width: 768px) {
    display: none;
    width: 100%;
    margin-left: -20px;
    margin-bottom: 50px;  
    height: 300px;
   }
`;
const Title = styled.h2`
    font-size: 50px;
    @media (max-width: 768px) {
    font-size: 25px;
    margin-top: -30px; 
  }
`;
const ServiceTitle = styled.h2`
    font-size: 50px;
    @media (max-width: 768px) {
    font-size: 15px; 
  }
`;
const Service = styled.p`
    font-size: 24px;
    @media (max-width: 768px) {
    font-size: 14px; 
    }
`;
const Left = styled.div`
   width: 50%;
   display: flex;
   justify-content: center;
   flex-direction: column;
`;
const Right = styled.div`
   width: 50%;
  @media (max-width: 768px) {
    width: 50%;
    display: flex;
    margin-left: -150px;
    justify-content: center;
    flex-direction: column;
    align-content: center;
  }
`;

export default function Services(){
    return(
        <Container>
          <Left>
            <Img src={serviceImg}/>
          </Left>
          <Right>
            <Title>Our Services</Title>
            <ServiceTitle>🔥 Fire Extinguisher Installation</ServiceTitle>
            <Service>Professional installation of certified fire extinguishers for homes and businesses, ensuring safety compliance and rapid response during emergencies.</Service>
            <ServiceTitle>🚒 Emergency Fire Response</ServiceTitle>
            <Service>Our trained team responds 24/7 to fire outbreaks, minimizing damage and protecting lives with fast, effective firefighting solutions.</Service>
            <ServiceTitle>🧯 Fire Safety Inspections</ServiceTitle>
            <Service>Comprehensive fire safety audits to identify hazards, ensure regulation compliance, and provide recommendations to protect your property and occupants.</Service>
          </Right>
        </Container>
    );
}