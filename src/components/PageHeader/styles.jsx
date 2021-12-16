import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;

  h2 {
    font-size: 28px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary.light};
  }

  span {
    font-size: 36px;
  }
`;
