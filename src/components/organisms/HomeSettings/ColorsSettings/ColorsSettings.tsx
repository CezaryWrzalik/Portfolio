import { colorAtom } from "@@recoil/atom/colorAtom";
import { Color } from "@atoms/Color/Color";
import { Typography } from "@atoms/Typography/Typography";
import { DynamicColors } from "@shared/constants";
import { useRecoilState } from "recoil";
import { ColorPickerWrapper, ColorSettingsWrapper } from "./ColorsSettings.styled";

export const ColorsSettings = () => {
  const [colorPicked, setColorPicked] = useRecoilState(colorAtom);

  const handleClick = (color: string) => {
    setColorPicked("#" + color);
  };

  return (
    <ColorSettingsWrapper>
      <Typography.TextBody_16>Color</Typography.TextBody_16>
      <ColorPickerWrapper>
      {DynamicColors.map((color, index) => (
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
