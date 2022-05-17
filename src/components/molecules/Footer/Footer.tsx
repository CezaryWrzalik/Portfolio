import { SocialMedias } from "@molecules/SocialMedias/SocialMedias"
import { FooterWrapper } from "./Footer.styled"

export const Footer = () => {
	return(
		<FooterWrapper>
			by Cezary Wrzalik
			<SocialMedias />
		</FooterWrapper>
	)
}