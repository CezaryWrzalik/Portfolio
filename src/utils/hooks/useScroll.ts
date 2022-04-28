import { useRecoilState } from "recoil";
import { currElIndexAtom } from "src/recoil/atom/currElIndexAtom";
import { useEffect, useRef, useState } from "react";
import next from "next";

export let yValues = {
  Home: {
    elementStart: 0,
    elementEnd: 0,
  },
  About: {
    elementStart: 0,
    elementEnd: 0,
  },
  Skills: {
    elementStart: 0,
    elementEnd: 0,
  },
  Projects: {
    elementStart: 0,
    elementEnd: 0,
  },
  Contact: {
    elementStart: 0,
    elementEnd: 0,
  },
};

export const ObjectKeys = Object.keys(yValues);

const useScroll = () => {
  const [yValuesState, setYvaluesState] = useState(yValues);
  const [currElIndex, setCurrElIndex] = useRecoilState(currElIndexAtom);
  const elementOnScreen = Object.values(yValuesState)[currElIndex];
  const scrollDirection = useRef("");
  const scrollErrorRef = useRef(0);
  const prevElement = currElIndex > 0 ? currElIndex - 1 : 0;
  const nextElement = currElIndex < 4 ? currElIndex + 1 : 0;

  const handleScroll = (e: any) => {
    const scrollBottom = window.scrollY + window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollError = scrollErrorRef.current;

    if (
      scrollDirection.current === "down" &&
      elementOnScreen.elementEnd <= scrollBottom
    ) {
      preventScroll(currElIndex, true);
    }

    if (
      scrollDirection.current === "up" &&
      elementOnScreen.elementStart >= scrollTop
    ) {
      preventScroll(currElIndex);
    }

    if (e.deltaY < 0) {
      scrollDirection.current = "up";
      if (elementOnScreen.elementStart >= scrollTop) {
        updateScrollError("up");
        e.preventDefault();
        if (scrollError < -300) {
          scrollToElement(prevElement);
        }
      }
    }

    if (e.deltaY > 0) {
      scrollDirection.current = "down";
      if (elementOnScreen.elementEnd <= scrollBottom) {
        updateScrollError("down");
        e.preventDefault();
        if (scrollError > 300) {
          scrollToElement(nextElement);
        }
      }
    }
  };

  const updateScrollError = (direction: string) => {
    if (direction === "reset") {
      scrollErrorRef.current = 0;
    }

    if (direction === "up") {
      if (scrollErrorRef.current > 0) {
        updateScrollError("reset");
      }
      scrollErrorRef.current -= 100;
    }

    if (direction === "down") {
      if (scrollErrorRef.current < 0) {
        updateScrollError("reset");
      }
      scrollErrorRef.current += 100;
    }
  };

  const updateYOfElements = () => {
    Object.keys(yValues).map((key) => {
      const element = document.getElementById(`${key}`);
      const yMin = element?.getBoundingClientRect().top;
      const yMax = element?.getBoundingClientRect().bottom;
      const elementYMin = yMin! + document.documentElement.scrollTop;

      const elementYMax = yMax! + document.documentElement.scrollTop;

      yValues = {
        ...yValues,
        [key]: {
          elementStart: Math.round(elementYMin),
          elementEnd: Math.round(elementYMax),
        },
      };
      setYvaluesState(yValues);
    });
  };

  const preventScroll = (elementIndex: number, bottom?: boolean) => {
    const top = Object.values(yValues)[elementIndex].elementStart;
    const bot =
      Object.values(yValues)[elementIndex].elementEnd - window.innerHeight;
    window.scrollTo({
      top: bottom ? bot : top,
    });
  };

  const scrollToElement = (elementIndex: number) => {
    const choosedElement = Object.values(yValues)[elementIndex].elementStart;

    window.scrollTo({
      top: choosedElement,
      behavior: "smooth",
    });
    updateScrollError("reset");
    setCurrElIndex(elementIndex);
  };

  useEffect(() => {
    updateYOfElements();
    window.addEventListener("resize", updateYOfElements, { passive: false });
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("scroll", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("resize", updateYOfElements);
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currElIndex]);

  useEffect(() => {
    scrollToElement(0);
  }, []);

  return { scrollToElement };
};

export default useScroll;
