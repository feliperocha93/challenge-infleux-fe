import { useState } from 'react';

import { Form, RadioGroupContainer } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

function Auth() {
  const [userRole, setUserRole] = useState('advertiser');
  const [userId, setUserId] = useState('');

  function handleUserRoleChange(event) {
    setUserRole(event.target.value);
  }

  function handleUserIdChange(event) {
    setUserId(event.target.value);
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log({ userRole, userId });
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <RadioGroupContainer>
        <label htmlFor="adv">
          <input type="radio" id="adv" name="userRole" value="advertiser" onChange={handleUserRoleChange} />
          Advertiser
        </label>

        <label htmlFor="pub">
          <input type="radio" id="pub" name="userRole" value="publisher" onChange={handleUserRoleChange} />
          Publisher
        </label>
      </RadioGroupContainer>

      <Input type="text" placeholder="ID" value={userId} onChange={handleUserIdChange} />

      <Button type="submit" disabled={!userId}>
        Login
      </Button>
    </Form>
  );
}

export default Auth;
