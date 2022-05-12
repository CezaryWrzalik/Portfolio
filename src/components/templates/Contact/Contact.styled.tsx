import { SectionIndexes } from "@@types/CommonTypes";
import { sections, zIndexes } from "@shared/constants";
import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: relative;
  min-height: 100%;
  width: 100%;
`;

export const ContactWrapper = styled.div<{ currElIndex: SectionIndexes }>(
  ({ currElIndex, theme: { colors, transitions } }) => `
	position: absolute;
	background: ${colors.body.bgPrimary};
	min-height: 100%;
	width: 100%;
	padding: 50px;
	color: ${colors.text.primary};
	top: ${currElIndex > sections.projects ? 0 : 100}%;
	transition: ${transitions.default}s;
	z-index: ${zIndexes.contact};
	`
);
