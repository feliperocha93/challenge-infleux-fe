import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

import { Context } from '../App';

function PageHeader() {
  const { setState } = useContext(Context);
  const navigate = useNavigate();

  function logout() {
    setState({
      userRole: 'advertiser',
      userId: '',
    });
    navigate('/');
  }
  return (
    <Container>
      <h2>Welcome, Publisher</h2>
      <span onClick={logout}>O</span>
    </Container>
  );
}

export default PageHeader;
