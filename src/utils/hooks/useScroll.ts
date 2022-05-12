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
    // errorLimit for MouseWheel
    let errorLimit = 5;
    const isTouchPad = e.deltaY
      ? e.deltaY === -3 * e.deltaY
      : e.deltaMode === 0;

    //Update errorLimit if touchpad
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

  //Function checking scroll or swipe direction and changing element if
  // enough number of ticks were delivered
  const scroll = (value: number, limit: number) => {
    const error = marginOfError.current;

    //Next Element
    if (value > 0) {
      updateMarginOfError("Increment");

      if (error < limit) return;
      const nextElement = currElIndex + 1;

      if (currElIndex > 4) return;
      updateElementOnScreen(nextElement as SectionIndexes);
    }

    //Previous Element
    if (value < 0) {
      updateMarginOfError("Decrement");

      if (error > -limit) return;
      const prevElement = currElIndex - 1;

      if (prevElement < 0) return;
      updateElementOnScreen(prevElement as SectionIndexes);
    }
  };

  //Changing displayed element
  const updateElementOnScreen = (element: SectionIndexes) => {
    updateMarginOfError("Reset");
    setCurrElIndex(element);
  };

  //Function for Projects element reseting ticks while actual scroll occurs
  const handleScroll = () => {
    if (!checkOverscroll()) {
      marginOfError.current = 0;
    }
  };

  //Catching wheel event and scrolling to next or previous
  //element if enough of ticks were delivered
  const handleWheel = (e: WheelEvent) => {
    if (!canScrollRef.current) return;
    if (checkOverscroll()) return;

    //Getting error limit depending on the device
    let errorLimit = getErrorLimit(e);

    scroll(e.deltaY, errorLimit);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.changedTouches[0].screenY;
  };

  //Same as handleWheel but for touch event
  const handleTouchMove = (e: TouchEvent) => {
    if (!canScrollRef.current) return;

    const touchStartY = touchStartRef.current;
    const touchCurrentY = e.changedTouches[0].screenY;
    const direction = touchStartY < touchCurrentY ? -1 : 1;

    scroll(direction, 5);
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
