import { AboutContentWrapper } from "@content/AboutContent/AboutContent.styled";
import styled from "styled-components";

export const SkillsContentWrapper = styled(AboutContentWrapper)(
  ({ theme: { colors } }) => `
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
