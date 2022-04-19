import { SidebarMarkers } from "@molecules/SidebarMarkers/SidebarMarkers";
import { menuItemsShared } from "@shared/constants";
import { useState } from "react";
import { SidebarMenu } from "../../molecules/SidebarMenu/SidebarMenu";
import { LayoutWrapper, MainWrapper } from "./Layout.styled";

type LayoutProps = {
  children: JSX.Element
}

export const Layout = ({children}: LayoutProps) => {


  const [currentActive, setCurrentActive] = useState(1);
  const [menuItems, setMenuItems] = useState(menuItemsShared);
	const handleClick = (id: number) => {
		setCurrentActive(id);
	}


  return (
    <LayoutWrapper>
      <SidebarMenu menuItems={menuItems} currentActive={currentActive} handleClick={(id) => handleClick(id)} />
			<MainWrapper >
				<SidebarMarkers menuItems={menuItems} currentActive={currentActive} handleClick={(id) => handleClick(id)}/>
        {children}
			</MainWrapper>
    </LayoutWrapper>
  );
};
