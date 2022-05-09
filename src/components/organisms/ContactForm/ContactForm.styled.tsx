import { breakpoints } from "@shared/constants";
import styled from "styled-components";

export const ContactFormWrapper = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60%;
  max-width: 1000px;

  @media (max-width: ${breakpoints.sm}px) {
    width: 80%;
  }
`;

export const ContactFormInputsWrapper = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  width: 100%;

  @media (max-width: ${breakpoints.sm}px) {
    grid-template: 1fr 1fr / 1fr;
  }
`;
export const ContactFormTextareaWrapper = styled.div`
  display: grid;
  width: 100%;
  margin-bottom: 30px;
`;
