import styled, { css } from 'styled-components';

export default styled.select`
  width: 100%;
  background: #fff;
  border: 2px solid transparent;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  min-height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  transition: border-color 0.2s linear;
  appearance: none;
  color: ${({ theme }) => theme.colors.gray[900]};
  cursor: pointer;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
