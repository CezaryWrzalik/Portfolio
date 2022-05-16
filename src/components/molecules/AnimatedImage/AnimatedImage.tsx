import { AnimatedImageWrapper, ImageWrapper } from "./AnimatedImage.styled";
import Image, { StaticImageData } from "next/image";
import { useSetRecoilState } from "recoil";
import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";

export type AnimatedImageProps = {
  side: "Top" | "Bottom";
  image: StaticImageData;
  visible?: boolean;
  halfScreen?: boolean;
  direction?: "Top" | "Bottom";
  destination?: 0 | 1 | 2 | 3 | 4;
  zIndex?: number;
};

export const AnimatedImage = ({
  image,
  side,
  visible = true,
  halfScreen = false,
  direction,
  destination,
  zIndex,
}: AnimatedImageProps) => {
  const setCurrElIndex = useSetRecoilState(currElIndexAtom);
  const handleClick = () => {
    if (destination || destination === 0) {
      setCurrElIndex(destination);
    }
  };

  return (
    <AnimatedImageWrapper side={side} visible={visible} halfScreen={halfScreen} zIndex={zIndex}>
      <ImageWrapper direction={direction} side={side} onClick={handleClick}>
        <Image src={image} />
      </ImageWrapper>
    </AnimatedImageWrapper>
  );
};
