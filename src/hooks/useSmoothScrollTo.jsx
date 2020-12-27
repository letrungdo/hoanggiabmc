import React from "react";
import { animateScroll, scroller } from "react-scroll";

const DefOptions = {
  smooth: "easeInOutQuart",
};

const useSmoothScrollTo = (anchorOrPosition, options = {}) => {
  const handleScrollTo = React.useCallback(() => {
    const opts = { ...DefOptions, ...options };

    switch (typeof anchorOrPosition) {
      case "number":
      case "bigint":
        animateScroll.scrollTo(anchorOrPosition, opts);
        break;
      case "string":
        scroller.scrollTo(anchorOrPosition, opts);
        break;
      default:
        break;
    }
  }, [anchorOrPosition, options]);

  return handleScrollTo;
};

export default useSmoothScrollTo;
