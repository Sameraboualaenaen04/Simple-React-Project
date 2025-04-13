import React from "react";
import styled from 'styled-components';
import { sculptureList } from "./dataProjects";
import { useState } from "react";


const Container = styled.div`
   display: flex;
   align-items: center;
   @media (max-width: 768px) {
    display: flex;
    margin-top: 80px;
  }
`;

const Title = styled.h1`
    font-size: 60px;
    width: 60%;
    @media (max-width: 768px) {
    font-size: 32px;
    margin-top: -10px;
    }
`;
const Desc = styled.h1`
    font-size: 26px;
    width: 60%;
    @media (max-width: 768px) {
    font-size: 20px;
    margin-top: -10px;
    }
`;
const Buttons = styled.h1`
    font-size: 60px;
    width: 60%;
    @media (max-width: 768px) {
    font-size: 14px;
    border: 1px solid;
    margin-left: 5px;
    }
`;
const Image = styled.img`
    width:'500px';
    height:'300px';
    @media (max-width: 768px) {
    width: 250px;
    margin-top: -40px;
    }
`;
const Left = styled.div`
   width: 50%;
   display: flex;
   align-items: center;
   flex-direction: column;
   @media (max-width: 768px) {
   width: 100%;
  } 
`;
const Right = styled.div`
   width: 50%;
   @media (max-width: 768px) {
   width: 70%;
   display: flex;
   align-items: center;
   flex-direction: column;
   width: 100%; 
  } 
`;

function EnhancedGallery(){
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    const handleNext = () => {
      if (index < sculptureList.length - 1) {
        setIndex(index + 1);
      }
    };
  
    const handlePrevious = () => {
      if (index > 0) {
        setIndex(index - 1);
      }
    }
    function handlShow(){
      setShowMore(!showMore);
    }
    function handleIndexes(){
      if(sculptureList[index] == 6){
        document.getElementsByName("myButton")[0].disabled = true;
      }
    }
    let sculpture =  sculptureList[index];
    return(
      <div  style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        minHeight: '100vh', 
        gap: '10px',
        marginTop:'-100px'
      }}>
        {handleIndexes()}
        <Title>Samples of our project</Title>  
        <div style={{display:'flex'}}>
        <Buttons onClick={handlePrevious} disabled={index === 0} >Prev</Buttons> 
        <Buttons onClick={handlShow}>
        {showMore ? 'Hide' : 'Show'} Show Details   
        </Buttons>
        <Buttons onClick={handleNext}  disabled={index === sculptureList.length - 1} >Next</Buttons> 
        </div>  
        <Desc>
          <i >{sculpture.name}</i>
          by {sculpture.artist}
        </Desc>
        
        <hr/>
        <Image src={sculpture.imgurl} alt={sculpture.alt} style={{}}/>
        {showMore && <Desc>{sculpture.description}</Desc>}
      </div>
    );
}
export default function Contact(){
    return(
        <Container>
            <Left> 
            {EnhancedGallery()}
            </Left>
            <Right>
            </Right>
        </Container>
    );
}