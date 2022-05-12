import { zIndexes } from "@shared/constants";
import styled from "styled-components";

type NotificationContainerProps = {
  activeNotification: boolean;
  status: string;
};

export const NotificationContainer = styled.div<NotificationContainerProps>(
  ({ activeNotification, status, theme: { transitions } }) => `
  position: absolute;
  bottom: 0px;
  left: 0px;
	z-index: ${zIndexes.max};
  height: 5rem;
  width: 100%;
  background-color: #1b1b1b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.5rem 10%;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);
  transition: opacity ${transitions.quick}s;
  opacity: ${activeNotification ? "1" : "0"};
  background: ${
    status === "pending"
      ? "#177cbe"
      : status === "error"
      ? "#e65035"
      : status === "success"
      ? "green"
      : null
  };
  `
);

export const Title = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  color: white;
  padding-right: 10px;
`;

export const Status = styled.p`
  color: white;
`;
