import React, { HTMLAttributes } from "react";
import { IconManager } from "@molecules/IconManager/IconManager";
import { InputMessageWrapper, Message } from "./InputMessage.styled";

export interface InputMessageProps
  extends HTMLAttributes<HTMLParagraphElement> {
  children: string;
}

export const InputMessage: React.FC<InputMessageProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <InputMessageWrapper {...rest}>
      <IconManager
        fill={["error"]}
        isLinearElement
        name={"IconAlert"}
        size={100}
      />
      <Message>{children}</Message>
    </InputMessageWrapper>
  );
};
