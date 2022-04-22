import { AnimatedImageWrapper } from "./AnimatedImage.styled";
import Image, { StaticImageData } from "next/image";

type AnimatedImageProps = {
	side: "Top" | "Bottom";
	image: StaticImageData;
	visible?: boolean;
}

export const AnimatedImage = ({image, side, visible = true}: AnimatedImageProps) => {
  return (
    <AnimatedImageWrapper side={side} visible={visible}>
      <Image src={image} />
    </AnimatedImageWrapper>
  );
};
