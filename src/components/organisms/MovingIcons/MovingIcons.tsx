import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { MovingIcon } from "@organisms/MovingIcon/MovingIcon";
import { useRecoilState } from "recoil";
import { MovingIconsWrapper } from "./MovingIcons.styled";

type MovingIconsProps = {
  numOfEachIcon: number;
};

type elProps = "Square" | "Circle" | "Triangle" | "X";

export const MovingIcons = ({ numOfEachIcon }: MovingIconsProps) => {
	const [currElIndex] = useRecoilState(currElIndexAtom);
  const allTypesOfIcons: elProps[] = ["Square", "Circle", "Triangle", "X"];

  return (
    <MovingIconsWrapper currElIndex={currElIndex}>
      {allTypesOfIcons.map((typeOfIcon: elProps) => {
        return [...Array(numOfEachIcon)].map((name, key) => (
          <MovingIcon iconName={typeOfIcon} key={typeOfIcon + `${key}`} />
        ));
      })}
    </MovingIconsWrapper>
  );
};
