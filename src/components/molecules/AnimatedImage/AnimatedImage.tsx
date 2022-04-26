import { AnimatedImageWrapper } from "./AnimatedImage.styled";
import Image, { StaticImageData } from "next/image";

type AnimatedImageProps = {
	side: "Top" | "Bottom" | "Mid";
	image: StaticImageData;
	visible?: boolean;
  halfScreen?: boolean;
}

export const AnimatedImage = ({image, side, visible = true, halfScreen = false}: AnimatedImageProps) => {
  return (
    <AnimatedImageWrapper side={side} visible={visible} halfScreen={halfScreen}>
      <Image src={image} />
    </AnimatedImageWrapper>
  );
};
