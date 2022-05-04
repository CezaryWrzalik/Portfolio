import { colorAtom } from "@@recoil/atom/colorAtom";
import { iconsAtom } from "@@recoil/atom/iconsAtom";
import { BackgroundModal } from "@atoms/BackgroundModal/BackgroundModal";
import { Typography } from "@atoms/Typography/Typography";
import { IconManager } from "@molecules/IconManager/IconManager";
import { palette } from "@shared/theme/config";
import useClickOutside from "@utils/hooks/useClickOutside";
import { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import {
  ColorPicker,
  HomeSettingsWrapper,
  IconsNumberSetting,
  SettingsWrapper,
} from "./HomeSettings.styled";

export const HomeSettings = () => {
  const [iconAmount, setIconAmount] = useRecoilState(iconsAtom);
  const [colorPicked, setColorPicked] = useRecoilState(colorAtom);
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

  const updateIconsAmount = (func: string) => {
    if (func === "decrement" && iconAmount) {
      setIconAmount(iconAmount - 1);
    } else if (func === "increment") {
      setIconAmount(iconAmount + 1);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setColorPicked(value);
    palette.dynamic = value;
  };

  return (
    <>
      <HomeSettingsWrapper onClick={handleClick}>
        <IconManager name={"Settings"} size={0} />
      </HomeSettingsWrapper>
      <SettingsWrapper isVisible={isVisible} ref={contentRef}>
        <IconsNumberSetting>
          <Typography.TextBody_16>Icons {iconAmount}</Typography.TextBody_16>
          <IconManager
            name={"Plus"}
            size={20}
            onClick={() => updateIconsAmount("increment")}
          />
          <IconManager
            name={"Minus"}
            size={20}
            onClick={() => updateIconsAmount("decrement")}
          />
        </IconsNumberSetting>
        <ColorPicker>
          <Typography.TextBody_16>Color</Typography.TextBody_16>
          <input
            onChange={handleChange}
            type="color"
            id="colorpicker"
            value={colorPicked}
          ></input>
        </ColorPicker>
      </SettingsWrapper>
      <BackgroundModal active={isVisible} ref={backgroundRef} />
    </>
  );
};
