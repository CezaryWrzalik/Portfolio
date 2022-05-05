import { BackgroundModal } from "@atoms/BackgroundModal/BackgroundModal";
import { IconManager } from "@molecules/IconManager/IconManager";
import { ColorsSettings } from "@organisms/HomeSettings/ColorsSettings/ColorsSettings";
import useClickOutside from "@utils/hooks/useClickOutside";
import { useRef, useState } from "react";
import { HomeSettingsWrapper, SettingsWrapper } from "./HomeSettings.styled";
import { IconsSettings } from "./IconsSettings/IconsSettings";

export const HomeSettings = () => {
  const [isVisible, setIsVisible] = useState(false);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  const closeSettings = () => {
    setIsVisible(false);
  };

  useClickOutside(contentRef, closeSettings, backgroundRef);

  return (
    <>
      <HomeSettingsWrapper onClick={handleClick}>
        <IconManager name={"Settings"}/>
      </HomeSettingsWrapper>

      <SettingsWrapper isVisible={isVisible} ref={contentRef}>
        <IconsSettings />
        <ColorsSettings />
      </SettingsWrapper>
      
      <BackgroundModal active={isVisible} ref={backgroundRef} />
    </>
  );
};
