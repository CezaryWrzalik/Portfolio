import styled from "styled-components";

export const InputMessageWrapper = styled.div(
  ({ theme: { colors, fontSizes } }) => `
    display: grid;
    grid-template-columns: auto 1fr;
      margin-top: 5px;
      font-size: ${fontSizes["14"]}px;
      color: ${colors.input.error};
      `
);

export const Message = styled.span``;
