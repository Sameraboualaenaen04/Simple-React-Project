import React, { useState } from "react";
import styled, { css } from "styled-components";

const Container = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
    gap: 10px;
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 30px;
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const MenuItem = styled.li`
  margin: 0 15px;
  cursor: pointer;
  font-size: 24px;
  @media (max-width: 768px) {
    margin: 5px 0;
    font-size: 20px;
    display: none
  }
`;

const Button1 = styled.div`
  border: 1px solid;
  border-radius: 10px;
  padding: 10px 15px;
  font-size: 24px;
  background: white;
  color: black;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 10px;
    width: 90px;
    margin-right: 40px;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const Modal = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 90%;
  @media (max-width: 768px) {
    max-width: 300px;
    font-size: 12px;
  }
`;

const Form1 = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FormGroup = styled.div`
  flex: 1;
  min-width: ${(props) => props.width || '200px'};
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Checkbox = styled.input``;

const Button2 = styled.button`
  background-color: #0d6efd;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
`;

export default function NavBar() {
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const rules = {
    length: password.length >= 8,
    hasLower: /[a-z]/.test(password),
    hasUpper: /[A-Z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  const isPasswordValid =
    rules.length && rules.hasLower && rules.hasUpper && rules.hasNumber && rules.hasSpecial;

  const handleChange = () => setChecked(!checked);

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password && isPasswordValid && address && city && zip && checked) {
      alert('✅ Form completed successfully!');
      setShowModal(false);
    } else {
      alert('❌ Please complete all fields correctly!');
    }
  };

  return (
    <>
      <Container>
        <Logo>Gikap</Logo>
        <Menu>
          <MenuItem onClick={() => handleScrollTo("#")}>Home</MenuItem>
          <MenuItem onClick={() => handleScrollTo("services")}>Services</MenuItem>
          <MenuItem onClick={() => handleScrollTo("about")}>About</MenuItem>
          <MenuItem onClick={() => handleScrollTo("contact")}>Contact</MenuItem>
        </Menu>
        <Button1 onClick={() => setShowModal(true)}>Join Our Team Now!</Button1>
      </Container>

      {showModal && (
        <ModalOverlay onClick={() => setShowModal(false)}>
          <Modal onClick={(e) => e.stopPropagation()}>
            <h2>Join our team by filling out the form below!</h2>
            <Form1 onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup width="78%">
                  <Label htmlFor="inputEmail4">Email</Label>
                  <Input type="email" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                </FormGroup>
                <FormGroup width="48%">
                  <Label htmlFor="inputPassword4">Password</Label>
                  <Input type="password" id="inputPassword4" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                  {password && (
                    <p style={{ color: isPasswordValid ? 'green' : 'red', marginTop: '4px', fontSize: '16px' }}>
                      {isPasswordValid ? '✅ Strong password' : '❌ Weak password'}
                    </p>
                  )}
                </FormGroup>
              </FormRow>
              <FormGroup>
                <Label htmlFor="inputAddress">Address</Label>
                <Input type="text" id="inputAddress" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="1234 Main St" required />
              </FormGroup>
              <FormRow>
                <FormGroup width="48%">
                  <Label htmlFor="inputCity">City</Label>
                  <Input type="text" id="inputCity" value={city} onChange={(e) => setCity(e.target.value)} required />
                </FormGroup>
                <FormGroup width="18%">
                  <Label htmlFor="inputZip">Zip</Label>
                  <Input type="text" id="inputZip" value={zip} onChange={(e) => setZip(e.target.value)} required />
                </FormGroup>
              </FormRow>
              <FormGroup>
                <CheckboxWrapper>
                  <Checkbox type="checkbox" id="gridCheck" checked={checked} onChange={handleChange} required />
                  <Label htmlFor="gridCheck">Check me out</Label>
                </CheckboxWrapper>
              </FormGroup>
              <Button2 type="submit">Sign in</Button2>
            </Form1>
            <button onClick={() => setShowModal(false)}>Close</button>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
}
