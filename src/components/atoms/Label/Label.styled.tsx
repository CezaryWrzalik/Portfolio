import styled, { css } from 'styled-components';

export const LabelWrapper = styled.label(
    ({ theme: { colors, fontSizes } }) => css`
        color: ${colors.text.primary};
        cursor: pointer;
        font-size: ${fontSizes[20]}px;
    `,
);
