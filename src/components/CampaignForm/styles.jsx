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

export const Label = styled.span`
  font-size: 12px;
  margin-bottom: 4px;
  color: '#ccc'
`;
