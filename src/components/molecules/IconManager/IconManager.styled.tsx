import styled, { css } from "styled-components";

export const IconWrapper = styled.div<{
  center?: boolean;
  rotate?: number;
  size: number;
}>`
  ${({ size, center, rotate }) => css`
        display: flex;
        font-size: ${size}px;

        svg{

            ${center && `margin: auto`};
            ${rotate && `transform: rotate(${rotate}deg)`};
        }S
    `}
`;
