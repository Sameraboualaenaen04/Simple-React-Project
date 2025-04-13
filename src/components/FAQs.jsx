import styled from 'styled-components';
import { useState } from 'react';

const AccordionContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
`;

const AccordionItem = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 1rem;
  overflow: hidden;
  @media (max-width: 768px) {
     font-size: 15px;
   }
`;

const AccordionHeader = styled.div`
  background-color: #f8f9fa;
  @media (max-width: 768px) {
     font-size: 18px;
   }
`;

const AccordionButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const AccordionBody = styled.div`
  padding: 1rem;
  display: ${({ expanded }) => (expanded ? 'block' : 'none')};
  background-color: #fff;
`;

export default function StyledAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      question: 'What services do you offer?',
      answer:
        "We provide comprehensive fire protection services including fire alarm system installation, fire extinguisher supply and maintenance, fire suppression systems, emergency lighting, safety audits, and training programs.",
    },
    {
      question: 'Are your technicians certified?',
      answer:
        "Yes, all our technicians are fully trained and certified according to national safety standards and local regulations to ensure top-quality service and compliance.",
    },
    {
      question: 'How often should fire extinguishers be serviced?',
      answer:
        "Fire extinguishers should be inspected monthly and serviced annually by a certified professional. We also offer scheduled maintenance contracts for your convenience.",
    },
    {
      question: 'Do you offer emergency response or 24/7 support?',
      answer:
        "Absolutely. We offer 24/7 emergency support to handle urgent fire protection issues. Just call our emergency hotline anytime, day or night.",
    },
    {
      question: 'Can you help ensure our business meets local fire codes?',
      answer:
        "Yes, we provide fire safety audits and inspections to help ensure full compliance with local fire codes and regulations, minimizing risks and penalties.",
    },
  ];

  return (
    <AccordionContainer>
      <h1>FAQS.</h1>
      {data.map((item, index) => (
        <AccordionItem key={index}>
          <AccordionHeader>
            <AccordionButton onClick={() => toggle(index)}>
              {item.question}
            </AccordionButton>
          </AccordionHeader>
          <AccordionBody expanded={openIndex === index}>{item.answer}</AccordionBody>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
}
