import styled from "styled-components";

export const IconSettingsWrapper = styled.div`
  display: grid;
  grid-template: 1fr / auto 20px 20px;
  gap: 10px;
`;

export const OptionWrapper = styled.div<{ disabled: boolean }>(
  ({ disabled, theme: { colors } }) => `
  
  svg {
    fill: ${colors.text.secondary};
    opacity: ${disabled && ".4"};
    cursor: ${disabled ? "default" : "pointer"};

    :hover {
      opacity: 0.4;
    }
    }
  `
);
