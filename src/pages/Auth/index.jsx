import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form, RadioGroupContainer } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import { Context } from '../../components/App';

function Auth() {
  const { state, setState } = useContext(Context);
  const navigate = useNavigate();

  function handleUserRoleChange(event) {
    setState({
      ...state,
      userRole: event.target.value,
    });
  }

  function handleUserIdChange(event) {
    setState({
      ...state,
      userId: event.target.value,
    });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    navigate('/');
  }

  return (
    <Form onSubmit={handleFormSubmit}>
      <RadioGroupContainer>
        <label htmlFor="adv">
          <input
            type="radio"
            id="adv"
            name="userRole"
            value="advertiser"
            onChange={handleUserRoleChange}
            defaultChecked={state.userRole === 'advertiser'}
          />
          Advertiser
        </label>

        <label htmlFor="pub">
          <input
            type="radio"
            id="pub"
            name="userRole"
            value="publisher"
            onChange={handleUserRoleChange}
            defaultChecked={state.userRole === 'publisher'}
          />
          Publisher
        </label>
      </RadioGroupContainer>

      <Input type="text" placeholder="ID" value={state.userId} onChange={handleUserIdChange} />

      <Button type="submit" disabled={!state.userId}>
        Login
      </Button>
    </Form>
  );
}

export default Auth;
