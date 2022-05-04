import styled from "styled-components";

export const PageLoaderWrapper = styled.div<{ isVisible: boolean }>(
  ({ isVisible }) => `
  height: 102%;
  width: 100%;
  position: absolute;
  z-index: 5;
  display: flex;
	flex-direction: column;
	transition: visibility .5s .6s;
	visibility: ${isVisible && "hidden"};	
	overflow: hidden;
	`
);

export const SliderWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const Slider = styled.div<{
  isVisible: boolean;
  delay: number;
  index: number;
}>(
  ({ isVisible, delay, index, theme: { colors } }) => `
	position: absolute;
	width: 100%;
	height: 100%;
  background: ${colors.body.bgSecondary};
	transition: left .5s linear ${0.2 * delay}s;
	left: ${!isVisible ? 0 : index % 2 === 0 ? -100 : 100}%;
	`
);
