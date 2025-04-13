import styled from 'styled-components';
import { useState } from 'react';

const Form1 = styled.form`
  width: 100%;
  max-width: 800px;
  margin: 2rem auto;
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

const Button = styled.button`
  background-color: #0d6efd;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  align-self: flex-start;
`;

export default function StyledForm() {
    const [password, setPassword] = useState('');

    const rules = {
      length: password.length >= 8,
      hasLower: /[a-z]/.test(password),
      hasUpper: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  
    const isValid =
      rules.length && rules.hasLower && rules.hasUpper && rules.hasNumber && rules.hasSpecial;
  
  return (
    <Form1 style={{fontSize:'26px', borderRadius:'20px', border:'1px solid', padding:'50px'}} onSubmit={(e) => {e.preventDefault()}}>
      <FormRow>
        <FormGroup width="78%">
          <Label htmlFor="inputEmail4">Email</Label>
          <Input type="email" id="inputEmail4" placeholder="Email" required />
        </FormGroup>
        <FormGroup width="48%">
          <Label htmlFor="inputPassword4">Password</Label>
          <Input type="password" id="inputPassword4" placeholder="Password" required value={password}
                 onChange={(e) => {
                    setPassword(e.target.value);
                 }}/>
          {password && (
                        <p style={{ color: isValid ? 'green' : 'red', marginTop: '4px', fontSize: '16px' }}>
                        {isValid ? '✅ Strong password' : '❌ Weak password'}
                         </p>
         )}  
        </FormGroup>
      </FormRow>

      <FormGroup>
        <Label htmlFor="inputAddress">Address</Label>
        <Input type="text" id="inputAddress" placeholder="1234 Main St" required/>
      </FormGroup>

      <FormRow>
        <FormGroup width="48%">
          <Label htmlFor="inputCity">City</Label>
          <Input type="text" id="inputCity" required/>
        </FormGroup>

        <FormGroup width="18%">
          <Label htmlFor="inputZip" required>Zip</Label>
          <Input type="text" id="inputZip" />
        </FormGroup>
      </FormRow>

      <FormGroup>
        <CheckboxWrapper>
          <Checkbox type="checkbox" id="gridCheck" required/>
          <Label htmlFor="gridCheck">Check me out</Label>
        </CheckboxWrapper>
      </FormGroup>

      <Button type="submit">Sign in</Button>
    </Form1>
  );
}
