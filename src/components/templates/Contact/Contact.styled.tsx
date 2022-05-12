import { SectionIndexes } from "@@types/CommonTypes";
import { sections, zIndexes } from "@shared/constants";
import styled from "styled-components";

export const ContactWrapper = styled.div<{ currElIndex: SectionIndexes }>(
  ({ currElIndex, theme: { colors, transitions } }) => `
	position: absolute;
	z-index: ${zIndexes.contact};
	background: ${colors.body.bgPrimary};
	min-height: 100%;
	width: 100%;
	color: ${colors.text.primary};
	top: ${currElIndex > sections.projects ? 0 : 100}%;
	transition: ${transitions.default}s;
	`
);

export const ContactContentWrapper = styled.div`
  padding: 50px;
`;
