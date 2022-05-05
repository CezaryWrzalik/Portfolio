import { colorAtom } from "@@recoil/atom/colorAtom";
import { Color } from "@atoms/Color/Color";
import { Typography } from "@atoms/Typography/Typography";
import { dynamicColors } from "@shared/constants";
import { useSetRecoilState } from "recoil";
import {
  ColorPickerWrapper,
  ColorSettingsWrapper,
} from "./ColorsSettings.styled";

export const ColorsSettings = () => {
  const setColorPicked = useSetRecoilState(colorAtom);

  const handleClick = (color: string) => {
    setColorPicked("#" + color);
  };

  return (
    <ColorSettingsWrapper>
      <Typography.TextBody_16>Color</Typography.TextBody_16>
      <ColorPickerWrapper>
        {dynamicColors.map((color, index) => (
          <Color
            background={color}
            key={index}
            onClick={() => handleClick(color)}
          ></Color>
        ))}
      </ColorPickerWrapper>
    </ColorSettingsWrapper>
  );
};
