import styled from 'styled-components';

const Container = styled.div`
  padding: 3rem 1rem;
  background: #f8f9fa;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    font-size: 16px;
  }
`;

const Footer = styled.footer`
  padding: 3rem 0;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
`;

const Heading = styled.h5`
  margin-bottom: 1rem;
  @media (min-width: 576px) {
    font-size: 10px;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const NavItem = styled.li`
  margin-bottom: 0.5rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #6c757d;
  &:hover {
    color: #000;
  }
`;

const FormWrapper = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  background: #0d6efd;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const BottomBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid #dee2e6;
  margin-top: 2rem;
  padding-top: 1rem;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 576px) {
    flex-direction: row;
    width: 50px;
  }
`;

const SocialList = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
  color: #000;
   @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SocialLink = styled.a`
  color: #000;
   @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export default function CustomFooter() {
  return (
    <Container style={{fontSize:'22px', display:'flex', alignItems:'center', justifyContent:"center"}}>
      <Footer>
        <Row>
        <SocialList style={{display:'flex', flexDirection:'column'}}>
            <li><SocialLink>Tabs</SocialLink></li>
            <li><SocialLink href="#">Home</SocialLink></li>
            <li><SocialLink href="https://www.youtube.com/@samer_is_code_it_now" aria-label="Facebook">About</SocialLink></li>
            <li><SocialLink href="https://www.youtube.com/@samer_is_code_it_now" aria-label="Facebook">FAQs</SocialLink></li>
            <li><SocialLink href="https://www.youtube.com/@samer_is_code_it_now" aria-label="Facebook">Contact</SocialLink></li>
        </SocialList>

        <SocialList style={{display:'flex', flexDirection:'column'}}>
            <li><SocialLink>Social media</SocialLink></li>
            <li><SocialLink href="#" aria-label="Instagram">Instagram</SocialLink></li>
            <li><SocialLink href="https://www.youtube.com/@samer_is_code_it_now" aria-label="Facebook">YouTube</SocialLink></li>
       </SocialList>

          <FormWrapper style={{display:'flex', flexDirection:'column'}}>
            <Heading style={{fontSize:'22px'}}>Subscribe to our newsletter</Heading>
            <p>Monthly digest of what's new and exciting from us.</p>
            <Form>
              <Input type="email" placeholder="Email address" />
              <Button type="button">Subscribe</Button>
            </Form>
          </FormWrapper>
        </Row>

        <BottomBar>
          <h6>&copy; 2025 Samer abou alaenaen,<br /> Inc. All rights reserved.</h6>
          <SocialList>
            <li><SocialLink href="#" aria-label="Instagram">Instagram</SocialLink></li>
            <li><SocialLink href="https://www.youtube.com/@samer_is_code_it_now" aria-label="Facebook">YouTube</SocialLink></li>
          </SocialList>
        </BottomBar>
      </Footer>
    </Container>
  );
}
