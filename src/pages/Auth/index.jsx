import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Form, RadioGroupContainer } from './styles';

import { Context } from '../../components/App';

import AdvertisersService from '../../services/api/AdvertisersService';
import PublishersService from '../../services/api/PublishersService';

function Auth() {
  const { state, setState } = useContext(Context);
  const [user, setUser] = useState({
    userRole: localStorage.getItem('user-role') || 'advertiser',
    userId: localStorage.getItem('user-id') || '',
  });
  const navigate = useNavigate();

  function handleUserRoleChange(event) {
    setUser({
      ...user,
      userRole: event.target.value,
    });
  }

  function handleUserIdChange(event) {
    setUser({
      ...user,
      userId: event.target.value,
    });
  }

  async function handleFormSubmit(event) {
    event.preventDefault();

    try {
      const { name, country_id } = user.userRole === 'advertiser'
        ? await AdvertisersService.login(user.userId)
        : await PublishersService.login(user.userId);

      localStorage.setItem('user-role', user.userRole);
      localStorage.setItem('user-id', user.userId);

      setState({
        ...state,
        user,
        name,
        country_id,
      });

      navigate('/');
    } catch {
      alert('Something is wrong. Try again, please.');
    }
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
            defaultChecked={user.userRole === 'advertiser'}
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
            defaultChecked={user.userRole === 'publisher'}
          />
          Publisher
        </label>
      </RadioGroupContainer>

      <Input type="text" placeholder="ID" value={user.userId} onChange={handleUserIdChange} />

      <Button type="submit" disabled={!user.userId}>
        Login
      </Button>
    </Form>
  );
}

export default Auth;
