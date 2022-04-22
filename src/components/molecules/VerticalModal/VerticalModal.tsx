import { Typography } from "@atoms/Typography/Typography"
import { ScreenSizeModalWrapper } from "./VerticalModal.styled"

export const VerticalModal = () => {
	return(
		<ScreenSizeModalWrapper>
			<Typography.TextH1_96><Typography.TextDyanmicColor>:(</Typography.TextDyanmicColor></Typography.TextH1_96>
			<Typography.TextH2_24>Everything looks better vertically</Typography.TextH2_24>
		</ScreenSizeModalWrapper>
	)
}