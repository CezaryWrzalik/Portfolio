import React, { TextareaHTMLAttributes } from "react";
import { BaseTextareaWrapper } from "./BaseTextarea.styled";

export interface SingleTextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  isResize?: boolean;
}

export const BaseTextarea = React.forwardRef<
  HTMLTextAreaElement,
  SingleTextareaProps
>(({ isResize = true, ...rest }, ref) => {
  return <BaseTextareaWrapper isResize={isResize} ref={ref} {...rest} />;
});
