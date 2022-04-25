import { yValuesKeys } from "@@types/CommonTypes";
import styled from "styled-components";

export const SkillsRightSectionWrapper = styled.div<{
  currElIndex: number;
}>(
  ({ currElIndex, theme: { colors, transitions } }) => `
	background: ${colors.body.bgPrimary};
  position: absolute;
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
	top: 0;
	left: ${currElIndex  >= 2 ? "0" : "-100%"};
	transition: ${transitions.default}s;
	`
);
