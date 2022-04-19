import React, { LabelHTMLAttributes } from 'react';
import { LabelWrapper } from './Label.styled';

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    children: string;
}

export const Label = ({ children, ...rest }: LabelProps) => {
    return <LabelWrapper {...rest}>{children}</LabelWrapper>;
};
