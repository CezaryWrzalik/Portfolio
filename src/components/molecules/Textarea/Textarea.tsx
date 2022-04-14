import React from "react";
import {  InputWrapper, LabelWrapper } from "@molecules/Input/Input.styled";
import { Label } from "@atoms/Label/Label";
import { BaseTextarea, SingleTextareaProps } from "@atoms/BaseTextarea/BaseTextarea";
import { generateId } from "@utils/generateId";

export interface TextareaProps extends SingleTextareaProps {
	label?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, ...rest }, ref) => {

		const textareaId = rest.id || generateId(rest.name);

    return (
      <>
        <InputWrapper>
          <LabelWrapper>{label && <Label htmlFor={textareaId}>{label}</Label>}</LabelWrapper>
          <BaseTextarea ref={ref} id={textareaId} {...rest} />
        </InputWrapper>
      </>
    );
  }
);