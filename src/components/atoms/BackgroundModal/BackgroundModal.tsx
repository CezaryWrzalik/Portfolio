import React from "react";
import { BackgroundModalWrapper } from "./BackgroundModal.styled"

type BackgroundModalProps = {
	active: boolean;
}

export const BackgroundModal = React.forwardRef<HTMLDivElement, BackgroundModalProps>(
	({active}, ref) => {
		return(
			<BackgroundModalWrapper active={active} ref={ref} />
		)
	}
);