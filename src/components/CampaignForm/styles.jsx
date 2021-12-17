import styled from 'styled-components';

export const Form = styled.form`
  & > * {
    margin-bottom: 20px;

    option {
      &:disabled {
        background: ${({ theme }) => theme.colors.gray[200]};
      }
    }
  }
`;
