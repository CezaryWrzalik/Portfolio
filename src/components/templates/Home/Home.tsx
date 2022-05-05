import { HomeSettings } from "@organisms/HomeSettings/HomeSettings";
import { HomeContent } from "@content/HomeContent/HomeContent";
import { ScrollDown } from "@molecules/ScrollDown/ScrollDown";
import { HomeIconWrapper, HomeWrapper } from "./Home.styled";
import { ImageMeMoji } from "@shared/images";
import Image from "next/image";

export const Home = () => {
  return (
    <HomeWrapper id="Home">
      <HomeSettings />
      <ScrollDown side="Right" />
      <HomeContent />
      <HomeIconWrapper>
        <Image src={ImageMeMoji} alt="pet" />
      </HomeIconWrapper>
      <ScrollDown side="Left" />
    </HomeWrapper>
  );
};
