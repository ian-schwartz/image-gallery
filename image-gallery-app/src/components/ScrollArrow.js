import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 2500) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 2500) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <FaArrowCircleUp
      className="scrollTop"
      onClick={scrollTop}
      style={{
        height: "4%",
        display: showScroll ? "flex" : "none",
        color: "#f8f9fa",
      }}
    />
  );
};

export default ScrollArrow;
