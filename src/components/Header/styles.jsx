import styled from 'styled-components';

export const Container = styled.div`
  margin: 30px 0;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.main};
  text-align: center;
  font-size: 48px;
`;
