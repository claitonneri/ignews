import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    main {
      display: flex;
      align-items: center;
      justify-content: space-between;

      max-width: 1120px;
      margin: auto;
      padding: 0 2rem;
      height: calc(100vh - 5rem);

     section > span {
        color: ${theme.colors.gray_100};
        font-weight: 600;
        font-size: 1.5rem;
      }

      h1 {
        color: ${theme.colors.white};
        font-size: 4.5rem;

        margin-top: 1.5rem;
        margin-bottom: 1.5rem;

        span {
          color: ${theme.colors.cyan_500};
        }
      }

      p {
        font-size: 1.5rem;
        line-height: 2.5rem;
        margin-bottom: 2rem;

        span {
          color: ${theme.colors.cyan_500};
          font-weight: 700;
        }
      }
    }
  `}
`;