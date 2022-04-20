import { menuItemsShared } from "@shared/constants";
import { SidebarMenuProps } from "src/components/organisms/SidebarMenu/SidebarMenu";
import {
  MarkerContainer,
  SidebarMarkersWrapper,
} from "./SidebarMarkers.styled";
import { yValuesKeys } from "@@types/CommonTypes";

export const SidebarMarkers = ({
  menuItems = menuItemsShared,
  elementOnScreen,
  handleClick,
}: SidebarMenuProps) => {
  return (
    <SidebarMarkersWrapper>
      {Object.keys(menuItems).map((elementId) => (
        <MarkerContainer
          elementId={elementId}
          elementOnScreen={elementOnScreen}
          onClick={() => handleClick(elementId as yValuesKeys)}
        ></MarkerContainer>
      ))}
    </SidebarMarkersWrapper>
  );
};
