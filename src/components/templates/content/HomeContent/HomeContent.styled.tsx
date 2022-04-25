import { breakpoints } from "@shared/constants";
import styled, { keyframes } from "styled-components";

const waveAnimation = keyframes`
	0%{
		
	}
	20%{
		transform: rotate(20deg);
	}
	40%{
		transform: rotate(-20deg);
	}
	60%{
		transform: rotate(20deg);
	}
	80%{
		transform: rotate(-20deg);
	}
	
`;

export const WelcomeTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: auto;
  width: fit-content;

  @media (max-width: ${breakpoints.sm}px) {
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template: auto / 1fr 1fr;
  gap: 20px;

  @media (max-width: ${breakpoints.sm}px) {
    grid-template: auto 1fr / auto;
  }
`;

export const HomeButtonWrapper = styled.div``;

export const EmojiWrapper = styled.span`
  display: inline-block;
  :hover {
    animation: ${waveAnimation} ease-in-out 1.2s;
  }
`;