import { InputHTMLAttributes } from "react";

export namespace InputProps {
	export type Default = {
			error?: boolean;
			errorMessage?: string;
	} & InputHTMLAttributes<HTMLInputElement>
};