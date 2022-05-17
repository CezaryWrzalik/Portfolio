import { IconManager } from "@molecules/IconManager/IconManager";
import { socials } from "@shared/constants";
import { SocialsAncor, SocialsWrappers } from "./SocialMedias.styled";

export const SocialMedias = () => {
  return (
    <SocialsWrappers>
      {socials.map(({ name, href }) => (
        <SocialsAncor href={href} target="_blank">
          <IconManager name={name} />
        </SocialsAncor>
      ))}
    </SocialsWrappers>
  );
};
