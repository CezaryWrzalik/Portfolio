import { HomeIconWrapper, HomeWrapper } from "./Home.styled";
import { HomeContent } from "../content/HomeContent/HomeContent";
import Image from "next/image";
import MeMoji from "@shared/images/MeMoji.png";

export const Home = () => {
  return (
    <HomeWrapper id="Home">
      <HomeContent />
      <HomeIconWrapper>
        <Image src={MeMoji} alt="pet" />
      </HomeIconWrapper>
    </HomeWrapper>
  );
};
