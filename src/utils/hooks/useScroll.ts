import { currElIndexAtom } from "@@recoil/atom/currElIndexAtom";
import { useRecoilState, useRecoilValue } from "recoil";
import { scrollAtom } from "@@recoil/atom/scrollAtom";
import { SectionIndexes } from "@@types/CommonTypes";
import { sections } from "@shared/constants";
import { useEffect, useRef } from "react";

type OptionType = "Increment" | "Decrement" | "Reset";

const useScroll = () => {
  const [currElIndex, setCurrElIndex] = useRecoilState(currElIndexAtom);
  const canScroll = useRecoilValue(scrollAtom);
  const canScrollRef = useRef(false);
  const touchStartRef = useRef(0);
  const marginOfError = useRef(0);

  let projects: HTMLElement | null;

  //Define number of ticks to scroll to the next element
  const getErrorLimit = (e: WheelEvent) => {
    let errorLimit = 5;
    const isTouchPad = e.deltaY
      ? e.deltaY === -3 * e.deltaY
      : e.deltaMode === 0;

    if (isTouchPad) {
      errorLimit = currElIndex === sections.projects ? 100 : 25;
    }
    return errorLimit;
  };

  //Function created for Projects element where while using screen or touchpad
  //there can occur overscroll in an element
  const checkOverscroll = () => {
    if (projects)
      return (
        projects.scrollTop + window.innerHeight > projects?.scrollHeight! ||
        projects.scrollTop < 0
      );
  };

  //Updating number of ticks delivered by scrolling a page
  const updateMarginOfError = (option: OptionType) => {
    switch (option) {
      case "Increment":
        if (marginOfError.current < 0) {
          marginOfError.current = 0;
        }
        marginOfError.current += 1;
        break;
      case "Decrement":
        if (marginOfError.current > 0) {
          marginOfError.current = 0;
        }
        marginOfError.current -= 1;
        break;
      case "Reset":
        marginOfError.current = 0;
        break;
      default:
        break;
    }
  };

  //Changing displayed element
  const updateElementOnScreen = (element: SectionIndexes) => {
    updateMarginOfError("Reset");
    setCurrElIndex(element);
  };

  //Catching wheel event and scrolling to next or previous
  //element if enough of ticks were delivered
  const handleWheel = (e: WheelEvent) => {
    if (!canScrollRef.current) return;
    if (checkOverscroll()) return;

    const error = marginOfError.current;
    //Getting error limit depending on the device
    let errorLimit = getErrorLimit(e);

    //Next page
    if (e.deltaY > 0) {
      updateMarginOfError("Increment");

      if (error > errorLimit) return;
      const nextElement = currElIndex + 1;

      if (currElIndex > 4) return;
      updateElementOnScreen(nextElement as SectionIndexes);
    }

    //Previous page
    if (e.deltaY < 0) {
      updateMarginOfError("Decrement");

      if (error > -errorLimit) return;
      const prevElement = currElIndex - 1;

      if (prevElement < 0) return;
      updateElementOnScreen(prevElement as SectionIndexes);
    }
  };

  //Function for Projects element reseting ticks while actual scroll occurs
  const handleScroll = () => {
    if (!checkOverscroll()) {
      marginOfError.current = 0;
    }
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
    projects = document.getElementById("Projects");

    setTimeout(() => {
      if (projects && currElIndex === sections.projects) {
        projects.addEventListener("scroll", handleScroll);
      }
      window.addEventListener("wheel", handleWheel);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove);
    }, 1500);
    return () => {
      if (projects) {
        projects.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [currElIndex]);

  //Disableing posibility to scroll to another elements'
  useEffect(() => {
    canScrollRef.current = canScroll;
  }, [canScroll]);
};

export default useScroll;
