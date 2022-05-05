import styled from "styled-components";

export const IconSettingsWrapper = styled.div(
  ({ theme: { colors } }) => `
  display: grid;
  grid-template: 1fr / auto 20px 20px;
  gap: 10px;
	
  svg {
		fill: ${colors.text.secondary};
    cursor: pointer;
    :hover {
			opacity: 0.4;
    }
  }
	`
);
