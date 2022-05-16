import { HomeSettings } from "@organisms/HomeSettings/HomeSettings";
import { HomeContent } from "@content/HomeContent/HomeContent";
import { ScrollDown } from "@molecules/ScrollDown/ScrollDown";
import { HomeIconWrapper, HomeWrapper } from "./Home.styled";
import { ImageMeMoji } from "@shared/images";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";

export const Home = () => {
  const currElIndex = useRecoilValue(currElIndexAtom);

  return (
    <HomeWrapper id="Home" currElIndex={currElIndex}>
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
