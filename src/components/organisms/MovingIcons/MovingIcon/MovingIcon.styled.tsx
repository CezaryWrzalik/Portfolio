import styled from "styled-components";

export const MovingIconWrapper = styled.div.attrs<{ x: number; y: number }>(
  ({ x, y }) => ({
    style: {
      top: (y ? y : -20) + "%",
      left: (x ? x : -20) + "%",
    },
  })
)<{ x: number; y: number }>`
  position: absolute;
  transition: top 8s ease, left 8s ease;
`;
