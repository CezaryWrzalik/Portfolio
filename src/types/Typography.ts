import { InputHTMLAttributes } from 'react';

export namespace TypographyProps {
    export type Header = InputHTMLAttributes<HTMLHeadingElement>;

    export type Body = InputHTMLAttributes<HTMLParagraphElement>;

    export type List = InputHTMLAttributes<HTMLLIElement>;

    export type Button = InputHTMLAttributes<HTMLSpanElement>;
}
