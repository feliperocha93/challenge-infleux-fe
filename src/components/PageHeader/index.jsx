import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { AiOutlineLogout } from 'react-icons/ai';
import { Container } from './styles';

import { Context } from '../App';

function PageHeader() {
  const { state, setState } = useContext(Context);
  const navigate = useNavigate();

  function logout() {
    setState({
      ...state,
      user: {},
    });
    localStorage.removeItem('user-role');
    localStorage.removeItem('user-id');
    navigate('/login');
  }
  return (
    <Container>
      <h2>Welcome, NAME</h2>
      <AiOutlineLogout
        onClick={logout}
        size={24}
        fill="#FC5050"
        style={{ cursor: 'pointer' }}
      />
    </Container>
  );
}

export default PageHeader;
