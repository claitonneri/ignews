import styled, { css } from 'styled-components'

export const Container = styled.header`
  ${({ theme }) => css`
    height: 5rem;
    border-bottom: 1px solid ${theme.colors.gray_800}
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    
    max-width: 1120px;
    height: 5rem;
    margin: 0 auto;
    padding: 0 2rem;

    > nav {
      margin-left: 5rem;
      height: 5rem;
    }
  `}
`;

interface ILinkProps {
  active: boolean;
}

export const Link = styled.a<ILinkProps>`
  ${({ theme, active }) => css`
    display: inline-block;
    padding: 0 0.5rem;
    height: 5rem;
    line-height: 5rem;
    color: ${theme.colors.gray_300};

    transition: color 0.2s;

    & + a {
      margin-left: 2rem;
    }

    &:hover {
      color: ${theme.colors.white};
    }

    ${active && css`
      height: 104%;
      border-bottom: 3px solid ${theme.colors.yellow_500};
      border-radius: 4px;
      color: ${theme.colors.white};
      font-weight: bold;
    `}
  `}
`;