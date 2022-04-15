import usePage from "@utils/hooks/usePage"
import { About } from "../organisms/About/About"
import { Home } from "../organisms/Home/Home"
import { TemplateWrapper } from "./Template.styled"

export const Template = () => {

	usePage();
	return(
		<TemplateWrapper>
			<Home />
		</TemplateWrapper>
	)
}