import styled, { css } from 'styled-components'
import { FaGoogle } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

export const Container = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.gray_800};
    padding: 14px 20px;
    color: ${theme.colors.gray_100};
    border-radius: 100px;
    font-weight: bold;
    border: none;
    outline: none;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  `}
`;

interface IIconProps {
  $islogged: boolean;
}

export const Icon = styled(FaGoogle)<IIconProps>`
  ${({ theme, $islogged }) => css`
    color: ${$islogged ? theme.colors.green_900 : theme.colors.yellow_500};
    margin-right: 12px;
  `}
`;

export const OutIcon = styled(FiX)`
  margin-left: 12px;
`;