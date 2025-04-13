import React from "react";
import styled , {keyframes}  from 'styled-components';

const animation = keyframes`
from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(100vw, 100vh);
  }
`;
const Canimation = keyframes`
from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(100vw, -100vh);
  }
`;
const Square = styled.div`
    width: 60px;
    height: 60px;
    background: #A10100;
    opacity: 0.7;
    position: absolute;
    top: -60px;
    left: -60px;
    z-index: -1;
    animation: ${animation} 10s linear infinite alternate;
 }
`;
const Circle = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #D4F1F9;
    opacity: 0.7;
    position: absolute;
    top: 220px;
    left: 250px;
    z-index: -1;
    animation: ${Canimation} 10s linear infinite alternate;
 }
`;
const Animate = keyframes`
  0% {
    width: 200px;
    height: 200px;
    border-radius: 0% 100% 100% 100%;
    transform: rotate(45deg);
  }
  25% {
    border-radius: 0% 0% 0% 0%;
    transform: rotate(0deg);
  }
  50% {
    border-radius: 0% 100% 100% 100%;
    transform: rotate(0deg);
  }
  85% {
    border-radius: 0% 100% 100% 100%;
    transform: rotate(45deg);
    width: 200px;
    height: 200px;
  }
  100% {
    border-radius: 0% 100% 100% 100%;
    transform: rotate(45deg);
    width: 200px;
    height: 200px;
  }
  @media (max-width: 768px) {
    0% {
    width: 100px;
    height: 100px;
    border-radius: 0% 100% 100% 100%;
    transform: rotate(45deg);
  }
  25% {
    border-radius: 0% 0% 0% 0%;
    transform: rotate(0deg);
  }
  50% {
    border-radius: 0% 100% 100% 100%;
    transform: rotate(0deg);
  }
  85% {
    border-radius: 0% 100% 100% 100%;
    transform: rotate(45deg);
    width: 100px;
    height: 100px;
  }
  100% {
    border-radius: 0% 100% 100% 100%;
    transform: rotate(45deg);
    width: 100px;
    height: 100px;
  }
}
`;
const Flicker = keyframes`
  0%, 100% {
    transform: translateX(-50%) scale(1) skewX(0deg);
    opacity: 0.9;
    filter: blur(1px);
  }
  25% {
    transform: translateX(-50%) scale(1.05) skewX(2deg);
    opacity: 1;
    filter: blur(0.5px);
  }
  50% {
    transform: translateX(-50%) scale(1.1) skewX(-3deg);
    opacity: 0.85;
    filter: blur(1.5px);
  }
  75% {
    transform: translateX(-50%) scale(1.07) skewX(1deg);
    opacity: 0.95;
    filter: blur(0.8px);
  }
`;

// Base flame colors with gradient transitions
const Flame = styled.div`
  position: relative;
  width: 100px;
  height: 150px;
  background: 
    radial-gradient(
      ellipse at center,
      rgba(255, 200, 50, 0.8) 0%,
      rgba(255, 120, 0, 0.6) 40%,
      rgba(255, 60, 0, 0.3) 70%,
      transparent 90%
    );
  border-radius: 50% 50% 20% 20%;
  box-shadow: 
    0 0 20px rgba(255, 160, 40, 0.8),
    0 0 40px rgba(255, 100, 0, 0.6),
    0 0 60px rgba(255, 40, 0, 0.3);
  animation: ${Flicker} 0.8s infinite alternate ease-in-out;
  transform-origin: center bottom;

  /* Inner core */
  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 50%;
    width: 30px;
    height: 60px;
    transform: translateX(-50%);
    background: 
      radial-gradient(
        ellipse at center,
        rgba(255, 255, 200, 0.9) 0%,
        rgba(255, 255, 100, 0.5) 50%,
        transparent 80%
      );
    border-radius: 50% 50% 20% 20%;
    animation: ${Flicker} 0.6s infinite alternate-reverse ease-in-out;
  }

  /* Top flame tip */
  &::after {
    content: "";
    position: absolute;
    top: -40px;
    left: 50%;
    width: 20px;
    height: 40px;
    transform: translateX(-50%);
    background: 
      radial-gradient(
        ellipse at center,
        rgba(255, 240, 150, 0.8) 0%,
        rgba(255, 200, 50, 0.3) 70%,
        transparent 90%
      );
    border-radius: 50% 50% 30% 30%;
    animation: ${Flicker} 0.4s infinite alternate ease-in-out;
   
  }
  @media (max-width: 768px) {
   display: none;
  }
`;

const Drop = styled.div`
    background: #D4F1F9;
    opacity: 0.7;
    position: absolute;
    top: 220px;
    left: 250px;
    z-index: -1;
    animation: ${Animate} 10s linear infinite alternate;
    @media (max-width: 768px) {
    width: 100px;
    margin-left: -230px;
    margin-top: -70px;
    }
`;

export default function AnimatateShapes(){
    return(
        <>
        <Square/>
        <Circle/>
        <Drop/>
        <Flame/>
        </>
    );
}