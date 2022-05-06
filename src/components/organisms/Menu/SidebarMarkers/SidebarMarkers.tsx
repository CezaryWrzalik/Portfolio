import { SidebarMenuProps } from "@organisms/Menu/SidebarMenu/SidebarMenu";
import {
  MarkerContainer,
  SidebarMarkersWrapper,
} from "./SidebarMarkers.styled";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { ObjectKeys } from "@utils/hooks/useScroll";

export const SidebarMarkers = ({ handleClick }: SidebarMenuProps) => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  const menuItems = ObjectKeys;
  return (
    <SidebarMarkersWrapper>
      {menuItems.map((value: string, markerIndex: number) => (
        <MarkerContainer
          key={markerIndex}
          markerIndex={markerIndex}
          currElIndex={currElIndex}
          onClick={() => handleClick(markerIndex)}
        ></MarkerContainer>
      ))}
    </SidebarMarkersWrapper>
  );
};
