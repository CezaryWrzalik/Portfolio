import {
  PageLoaderWrapper,
  Slider,
  SliderWrapper,
} from "./PageLoader.styled";

type PageLoaderProps = {
  isVisible: boolean;
};

export const PageLoader = ({ isVisible }: PageLoaderProps) => {
  return (
    <PageLoaderWrapper isVisible={isVisible}>
      {[...Array(3)].map((x, i) => (
        <SliderWrapper>
          <Slider isVisible={isVisible} index={i} delay={i} />
        </SliderWrapper>
      ))}
    </PageLoaderWrapper>
  );
};
