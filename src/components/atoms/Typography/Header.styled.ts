import styled, { css } from 'styled-components';
import { repeatableStyles } from './repeatableStyles.styled';

export const repeatableHeaderCss = css(
    ({ theme: { fontFamily } }) => css`
        ${repeatableStyles};
        font-family: ${fontFamily.gtw_pro};
    `,
);

export const TextH1_96 = styled.h1(
	({ theme: { fontSizes } }) => css`
			${repeatableHeaderCss};
			font-size: ${fontSizes[96]}px;
	`,
);

export const TextH1_64 = styled.h1(
	({ theme: { fontSizes } }) => css`
			${repeatableHeaderCss};
			font-size: ${fontSizes[64]}px;
	`,
);

export const TextH2_24 = styled.h2(
	({ theme: { fontSizes } }) => css`
			${repeatableHeaderCss};
			font-size: ${fontSizes[24]}px;
	`,
);

export const TextH2_24_15 = styled.h2(
	({ theme: { fontSizes } }) => css`
			${repeatableHeaderCss};
			font-size: ${fontSizes[24]}px;
			letter-spacing: .15rem;
	`,
);

export const TextH3_20 = styled.h3(
	({ theme: { fontSizes } }) => css`
			${repeatableHeaderCss};
			font-size: ${fontSizes[20]}px;
	`,
);