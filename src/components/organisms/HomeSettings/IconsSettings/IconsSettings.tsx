import { iconsAtom } from "@@recoil/atom/iconsAtom";
import { Typography } from "@atoms/Typography/Typography";
import { IconManager } from "@molecules/IconManager/IconManager";
import { useRecoilState } from "recoil";
import { IconSettingsWrapper, OptionWrapper } from "./IconsSettings.styled";

type OptionType = {
  name: "Plus" | "Minus";
  disableAt: number;
  func: "Increment" | "Decrement";
};

const options: OptionType[] = [
  { name: "Plus", disableAt: 50, func: "Increment" },
  { name: "Minus", disableAt: 0, func: "Decrement" },
];

export const IconsSettings = () => {
  const [iconAmount, setIconAmount] = useRecoilState(iconsAtom);

  const updateIconsAmount = (func: string) => {
    switch (func) {
      case "Increment":
        if (iconAmount >= 50) return;
        return setIconAmount(iconAmount + 1);
      case "Decrement":
        if (!iconAmount) return;
        return setIconAmount(iconAmount - 1);
      default:
        return;
    }
  };

  return (
    <IconSettingsWrapper>
      <Typography.TextBody_16>Icons {iconAmount}</Typography.TextBody_16>
      {options.map((option, i) => (
        <OptionWrapper disabled={iconAmount === option.disableAt} key={i}>
          <IconManager
            name={option.name}
            onClick={() => updateIconsAmount(option.func)}
          />
        </OptionWrapper>
      ))}
    </IconSettingsWrapper>
  );
};
