import { HamburgerIconWrapper, SpanWrapper } from "./HamburgerIcon.styled"

type HamburgerIconProps = {
	open: boolean;
	toggleMenu: () => void;
}

export const HamburgerIcon = ({open, toggleMenu}: HamburgerIconProps) => {
	return (
		<HamburgerIconWrapper onClick={() => toggleMenu()}>
			<SpanWrapper open={open}></SpanWrapper>
			<SpanWrapper open={open}></SpanWrapper>
			<SpanWrapper open={open}></SpanWrapper>
			<SpanWrapper open={open}></SpanWrapper>
			<SpanWrapper open={open}></SpanWrapper>
			<SpanWrapper open={open}></SpanWrapper>
		</HamburgerIconWrapper>
	)
}