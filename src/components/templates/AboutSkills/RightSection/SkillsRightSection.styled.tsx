import styled from "styled-components";

export const SkillsRightSectionWrapper = styled.div<{
  currElIndex: number;
}>(
  ({ currElIndex, theme: { colors, transitions } }) => `
	background: ${colors.body.bgPrimary};
  position: absolute;
  height: 100%;
  width: 100%;
	top: 0;
	left: ${currElIndex  >= 2 ? "0" : "-100%"};
	transition: ${transitions.default}s;
	`
  );
  
  export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  grid-template: 1fr / 1fr;
  place-items: center;
  z-index: 5;
  overflow: hidden;
`