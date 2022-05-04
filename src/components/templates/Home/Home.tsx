import { HomeIconWrapper, HomeWrapper } from "./Home.styled";
import { HomeContent } from "../../content/HomeContent/HomeContent";
import Image from "next/image";
import MeMoji from "@shared/images/MeMoji.png";
import { ScrollDown } from "@molecules/ScrollDown/ScrollDown";

export const Home = () => {
  return (
    <HomeWrapper id="Home">
      <ScrollDown side="Right" />
      <HomeContent />
      <HomeIconWrapper>
        <Image src={MeMoji} alt="pet" />
      </HomeIconWrapper>
      <ScrollDown side="Left" />
    </HomeWrapper>
  );
};
