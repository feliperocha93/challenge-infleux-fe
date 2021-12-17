import styled from 'styled-components';

export const Card = styled.div`
width: 100%;
max-width: 100%;
background: ${({ theme }) => theme.colors.primary.lighter};
border-radius: 6px;
padding: 20px;
box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.04);
margin-bottom: 20px;

h3 {
  margin-bottom: 10px;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.primary.dark};
}
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
