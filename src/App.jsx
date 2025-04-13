import styled from "styled-components";
import NavBar from "./components/navbar";
import Intro from "./components/intro";
import Services from "./components/services";
import About from "./components/About"
import Contact from "./components/Projects";
import StyledAccordion from "./components/FAQs";
import CustomFooter from "./components/footer";
import StyledForm from "./components/Contact";

//Container its an component and styled by styled way
//styled.(Html)
//? By this method we get rid of external css files
const Container = styled.div`
  padding: 20px;
  margin: 10px;
  height: 100vh;
  overflow: hidden;
  @media (max-width: 768px) {
    max-width: 800px;
    overflow-x: hidden;
   }
`;
const IntroShape = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;
   clip-path: polygon(73% 0, 100% 0%, 100% 100%, 45% 100%);
   background: #A10100;
   @media (max-width: 768px) {
     margin-left: 45px;
   }
`;
const ServiceShape = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 100vh;
   left: 0;
   z-index: -1;
   clip-path: polygon(0 0, 45% 0%, 50% 100%, 0% 100%);
   background: #D4F1F9;
   @media (max-width: 768px) {
   clip-path: polygon(0 0, 100% 0%, 50% 100%, 0% 100%);
   }
   
`;
const AboutShape = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 200vh;
   left: 0;
   z-index: -1;
   clip-path: polygon(50% 0, 100% 0%, 100% 100%, 40% 100%);
   background: #A10100;
   @media (max-width: 768px) {
   height: 60%;
   clip-path: polygon(38% 0, 100% 0%, 100% 100%, 38% 100%);
   margin-left: 45px;
   }
`;
const ProjectShape = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   top: 300vh;
   left: 0;
   z-index: -1;
   clip-path: polygon(0 0, 40% 0%, 50% 100%, 0% 100%);
   background: #D4F1F9;  
   @media (max-width: 768px) {
   // height: 60%;
   clip-path: polygon(38% 0, 100% 0%, 100% 100%, 38% 100%);
   margin: -335px 45px;
   }
`;
const ContactShape1 = styled.div`
   width: 50%;
   height: 100%;
   position: absolute;
   top: 400vh;
   left: 0;
   z-index: -1;
   clip-path: polygon(0 0, 100% 0%, 75% 100%, 0% 100%);
   background: #D4F1F9;
`;
const ContactShape2 = styled.div`
   width: 50%;
   height: 100%;
   position: absolute;
   top: 400vh;
   left: 0;
   z-index: -1;
   clip-path: polygon(0 0, 30% 0, 0 100%, 0 100%);
   background: blue;
`;
function App() {
  return (
    <>
     <Container>
      <NavBar/>
      <Intro/>
      <IntroShape/>
     </Container>
     <Container>
      <Services/>
      <ServiceShape/>
     </Container>
      <About/>
      <AboutShape/>
     <Container>
     <Contact/>
     <ProjectShape/>
     </Container>
     <ContactShape1/>
     <ContactShape1/>
     <Container>
     <StyledAccordion/>
     </Container>
     <CustomFooter/>
     </>
  )
}

export default App
