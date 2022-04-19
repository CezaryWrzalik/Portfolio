import styled from "styled-components";

export const TemplateWrapper = styled.div`
  display: grid;
	max-height: 100%;
	grid-template: repeat(2, minmax(100vh, auto)) / 1fr;
	padding: 0;
	margin: 0;
`;
