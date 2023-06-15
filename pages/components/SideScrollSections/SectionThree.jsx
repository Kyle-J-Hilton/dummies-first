import React, { useRef, useEffect, useLayoutEffect } from "react";
import styles from "../../../styles/SideScroll.module.css";
import Image from "next/image";
import ArrowRight from "../../assets/images/arrowright.png";
import ArrowLeft from "../../assets/images/arrowleft.png";

import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  useLayoutEffect(() => {
    const container = leftArrowRef.current;
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
  });

  useLayoutEffect(() => {
    const containerOne = rightArrowRef.current;
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
  });

  return (
    <div className={styles.sectionThree}>
      <div className={styles.scrollToExplore}>
        <Image
          ref={leftArrowRef}
          className={styles.arrow}
          src={ArrowLeft}
          alt="arrow left"
        />
        <Image
          ref={rightArrowRef}
          className={styles.arrow}
          src={ArrowRight}
          alt="arrow right"
        />
      </div>
    </div>
  );
};

export default SectionThree;
