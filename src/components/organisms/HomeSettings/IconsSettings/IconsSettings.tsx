import { iconsAtom } from "@@recoil/atom/iconsAtom";
import { Typography } from "@atoms/Typography/Typography";
import { IconManager } from "@molecules/IconManager/IconManager";
import { useRecoilState } from "recoil";
import { IconSettingsWrapper } from "./IconsSettings.styled";

export const IconsSettings = () => {
  const [iconAmount, setIconAmount] = useRecoilState(iconsAtom);

  const updateIconsAmount = (func: string) => {
    if (func === "decrement" && iconAmount) {
      setIconAmount(iconAmount - 1);
    } else if (func === "increment") {
      setIconAmount(iconAmount + 1);
    }
  };

  return (
    <IconSettingsWrapper>
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
    </IconSettingsWrapper>
  );
};
