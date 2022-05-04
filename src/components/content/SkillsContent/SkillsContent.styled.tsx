import styled from "styled-components";

export const ContentWrapper = styled.div(
  ({ theme: { colors } }) => `
  max-width: 440px;
  svg {
    fill: ${colors.dynamic};
    width: 40%;
  }
  `
);

export const SkillsList = styled.ul`
  padding: 0;
  font-weight: bold;
  font-size: 20px;
  margin-top: 5px;
  line-height: 1.5rem;
`;
