import { SidebarMenuProps } from "@organisms/Menu/SidebarMenu/SidebarMenu";
import {
  MarkerContainer,
  SidebarMarkersWrapper,
} from "./SidebarMarkers.styled";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { menuItems } from "@shared/constants";

export const SidebarMarkers = ({ handleClick }: SidebarMenuProps) => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  return (
    <SidebarMarkersWrapper>
      {menuItems.map((data) => (
        <MarkerContainer
          key={data.id}
          markerIndex={data.id}
          currElIndex={currElIndex}
          onClick={() => handleClick(data.id)}
        ></MarkerContainer>
      ))}
    </SidebarMarkersWrapper>
  );
};
