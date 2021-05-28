import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;

  ${({ theme }) => css`
    color: ${theme.color.secondary};
  `}
`;
