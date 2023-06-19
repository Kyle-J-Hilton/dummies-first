import React, { useRef, useEffect, useLayoutEffect } from "react";
import styles from "../../../styles/SideScroll.module.css";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  useLayoutEffect(() => {
    const container = leftArrowRef.current;
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    let docWidth = window.innerHeight * 9.26;
    let arrowL = docWidth / 2 - 100;
    if (isMobile) {
      // Mobile-specific behavior

      gsap.to(container, {
        opacity: 0.5,
        duration: 0.5,
        scrollTrigger: {
          markers: false,
          start: arrowL,
          trigger: container,
          horizontal: true,
          toggleActions: "reverse none play none",
        },
      });
    } else {
      // Desktop behavior

      gsap.to(container, {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          markers: false,
          start: 1700,
          trigger: container,
          horizontal: true,
          toggleActions: "reverse none play none",
        },
      });
    }
  });

  useLayoutEffect(() => {
    const containerOne = rightArrowRef.current;
    const isMobile = window.innerWidth <= 768; // Adjust the breakpoint as needed
    let docWidth = window.innerHeight * 9.26;

    let arrowR = docWidth / 2 + 100;
    if (isMobile) {
      // Mobile-specific behavior

      gsap.to(containerOne, {
        opacity: 0.5,
        duration: 0.5,
        scrollTrigger: {
          markers: false,
          start: arrowR,
          trigger: containerOne,
          horizontal: true,
          toggleActions: "play none reverse none",
        },
      });
    } else {
      // Desktop behavior

      gsap.to(containerOne, {
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          markers: false,
          start: "+=1000",
          trigger: containerOne,
          horizontal: true,
          toggleActions: "play none reverse none",
        },
      });
    }
  });

  const handleLeftArrowClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  
  const handleRightArrowClick = () => {
  let docWidth = window.innerHeight * 9.25;
    window.scrollTo({
      top: 0,
      left: docWidth,
      behavior: "smooth",
    });
  }

  return (
    <div className={styles.sectionThree}>
      <div className={styles.scrollToExplore}>
        <a
          ref={leftArrowRef}
          className={styles.arrowL}
          
          alt="arrow left"
          onClick={handleLeftArrowClick}
        />
        <a
          ref={rightArrowRef}
          className={styles.arrowR}
          
          alt="arrow right"
          onClick={handleRightArrowClick}
        />
      </div>
    </div>
  );
};

export default SectionThree;
