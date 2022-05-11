import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { scrollAtom } from "@@recoil/atom/scrollAtom";
import { SectionIndexes } from "@@types/CommonTypes";
import { sections } from "@shared/constants";
import { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";

type OptionType = "Increment" | "Decrement" | "Reset";

const useScroll = () => {
  const [currElIndex, setCurrElIndex] = useRecoilState(currElIndexAtom);
  const [canScroll, setCanScroll] = useRecoilState(scrollAtom);
  const touchStartRef = useRef(0);
  const canScrollRef = useRef(false);
  const marginOfError = useRef(0);
  const eDeltaRef = useRef(0);

  const updateMarginOfError = (option: OptionType) => {
    switch (option) {
      case "Increment":
        if (marginOfError.current < 0) {
          marginOfError.current = 0;
        }
        marginOfError.current += 100;
        break;
      case "Decrement":
        if (marginOfError.current > 0) {
          marginOfError.current = 0;
        }
        marginOfError.current -= 100;
        break;
      case "Reset":
        marginOfError.current = 0;
        break;
      default:
        break;
    }
  };

  const updateElementOnScreen = (element: SectionIndexes) => {
    updateMarginOfError("Reset");
    setCurrElIndex(element);
  };

  const handleWheel = (e: any) => {
    let errorLimit = 500;

    if (!canScrollRef.current) return;

    var isTouchPad = e.wheelDeltaY
      ? e.wheelDeltaY === -3 * e.deltaY
      : e.deltaMode === 0;
    if (isTouchPad) {
      errorLimit = currElIndex === sections.projects ? 10000 : 5000;
    }
 
    const error = marginOfError.current;
    
    if (e.deltaY > 0) {
      updateMarginOfError("Increment");
      if (error > errorLimit) {
        const nextElement = currElIndex + 1;
        if (nextElement <= 4) {
          updateElementOnScreen(nextElement as SectionIndexes);
          return;
        }
      }
    }

    if (e.deltaY < 0) {
      updateMarginOfError("Decrement");
      if (error < -errorLimit) {
        const prevElement = currElIndex - 1;
        if (prevElement >= 0) {
          updateElementOnScreen(prevElement as SectionIndexes);
          return;
        }
      }
    }
  };

  const handleScroll = () => {
    const projects = document.getElementById("Projects");

    if (
      projects?.scrollTop! + window.innerHeight < projects?.scrollHeight! &&
      projects?.scrollTop! > 0
    ) {
      marginOfError.current = 0;
    }
    eDeltaRef.current = 0;
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenY;
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!canScrollRef.current) return;

    const error = marginOfError.current;
    const touchStartY = touchStartRef.current;
    const touchCurrentY = e.changedTouches[0].screenY;
    const direction = touchStartY < touchCurrentY ? "up" : "down";

    if (direction === "down") {
      updateMarginOfError("Increment");
      if (error >= 500) {
        const nextElement = currElIndex + 1;
        if (nextElement <= 4 && canScrollRef.current) {
          updateElementOnScreen(nextElement as SectionIndexes);
          return;
        }
      }
    }

    if (direction === "up") {
      updateMarginOfError("Decrement");
      if (error <= -500) {
        const prevElement = currElIndex - 1;
        if (prevElement >= 0 && canScrollRef.current) {
          updateElementOnScreen(prevElement as SectionIndexes);
          return;
        }
      }
    }
  };

  useEffect(() => {
    const projects = document.getElementById("Projects");
    setTimeout(() => {
      if (projects && currElIndex === sections.projects) {
        projects.addEventListener("scroll", handleScroll);
      }
      window.addEventListener("mousewheel", handleWheel);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
    }, 1500);
    return () => {
      if (projects) {
        projects.removeEventListener("scroll", handleScroll);
      }

      window.removeEventListener("mousewheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currElIndex]);

  useEffect(() => {
    canScrollRef.current = canScroll;
  }, [canScroll]);
};

export default useScroll;
