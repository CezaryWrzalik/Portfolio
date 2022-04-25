import { SidebarMenuProps } from "src/components/organisms/SidebarMenu/SidebarMenu";
import {
  MarkerContainer,
  SidebarMarkersWrapper,
} from "./SidebarMarkers.styled";
import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";

export const SidebarMarkers = ({
  menuItems,
  handleClick,
}: SidebarMenuProps) => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
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
