import styled, { css } from 'styled-components'

export const Container = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.yellow_500};
    color: ${theme.colors.gray_900};
    padding: 20px 64px;
    font-size: 1.2rem;
    font-weight: 700;
    border-radius: 5rem;
    border: 0;
    outline: 0;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;