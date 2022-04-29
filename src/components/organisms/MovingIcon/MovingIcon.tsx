import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { IconName } from "@@types/CommonTypes";
import { IconManager } from "@molecules/IconManager/IconManager";
import { useEffect, useState } from "react";
import { useRecoilState} from "recoil";
import { MovingIconWrapper } from "./MovingIcon.styled";

type MovingIconProps = {
  iconName: IconName;
};

export const MovingIcon = ({ iconName }: MovingIconProps) => {
  const [currElIndex] = useRecoilState(currElIndexAtom);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const getRandom = () => {
    const random = Math.floor(Math.random() * 140) - 20;
    return random;
  };

  useEffect(() => {
    const position = { x: 0, y: 0 };
    position.x = getRandom();
    position.y = getRandom();
    setPosition(position);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setPosition({ x: getRandom(), y: getRandom() });
    }, 8000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <MovingIconWrapper x={position.x} y={position.y} currElIndex={currElIndex}>
      <IconManager name={iconName} size={50} sizeY={30} />
    </MovingIconWrapper>
  );
};
