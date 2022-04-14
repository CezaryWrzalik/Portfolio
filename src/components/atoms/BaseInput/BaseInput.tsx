import React, { InputHTMLAttributes } from "react";
import { BaseInputElement, BaseInputWrapper } from "./BaseInput.styled";

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}
export const BaseInput = React.forwardRef<HTMLInputElement, BaseInputProps>(
  ({ ...rest }: BaseInputProps, ref) => {
    return (
      <BaseInputWrapper>
        <BaseInputElement {...rest} ref={ref} />;
      </BaseInputWrapper>
    );
  }
);