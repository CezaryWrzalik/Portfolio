import { menuItemsShared } from "@shared/constants"
import { SidebarMenuProps } from "@molecules/SidebarMenu/SidebarMenu"
import { MarkerContainer, SidebarMarkersWrapper } from "./SidebarMarkers.styled"

export const SidebarMarkers = ({
	menuItems = menuItemsShared,
  currentActive,
  handleClick,
}: SidebarMenuProps) => {
	return(
		<SidebarMarkersWrapper>
			{Object.keys(menuItems).map((name, id) => (
              <MarkerContainer
                index={id}
                currentActive={currentActive}
                onClick={() => handleClick(id)}
              >
              </MarkerContainer>
            ))}
		</SidebarMarkersWrapper>
	)
}