import styled, { css } from "styled-components";
import { repeatableBodyCss } from "./Body.styled";

const TextBulletMarkStyle = css(
  ({ theme: { colors, radius } }) => css`

	margin-left: 14px;
	
  &::before {
		background: ${colors.dynamic};
    border-radius: ${radius[50]}%;
    content: "";
    height: 8px;
    width: 8px;
    left: -14px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
		`
);

export const TextBullet_20 = styled.li(
  ({ theme: { fontSizes } }) => css`
    ${repeatableBodyCss};
    font-size: ${fontSizes[20]}px;
    list-style: none;
    position: relative;
  `
);

export const TextBullet_16 = styled.li<{ marks?: boolean }>(
  ({ marks, theme: { fontSizes } }) => css`
    ${repeatableBodyCss};
    font-size: ${fontSizes[16]}px;
    list-style: none;
    position: relative;

    ${marks && TextBulletMarkStyle};
  `
);
