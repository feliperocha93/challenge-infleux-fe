import styled from 'styled-components';

export const Form = styled.form`
  & > * {
    margin-bottom: 20px;
  }
`;

export const RadioGroupContainer = styled.div`
  display: flex;
  justify-content: space-around;

  label {
    color: ${({ theme }) => theme.colors.primary.dark};
    cursor: pointer;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
  }

  input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  border-radius: 50%;
  width: 20px;
  height: 20px;

  border: 2px solid ${({ theme }) => theme.colors.primary.lighter};
  transition: 0.2s all linear;
  margin-right: 10px;

  position: relative;
  top: 4px;

  cursor: pointer;
}

  input:checked {
    border: 10px solid ${({ theme }) => theme.colors.primary.dark};
  }
`;
