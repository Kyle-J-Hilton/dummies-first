import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import styles from "../../../styles/SideScroll.module.css";

//import { gsap } from "gsap/dist/gsap";
//import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

//gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  const leftArrowRef = useRef(null);
  const rightArrowRef = useRef(null);

  /*
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
*/
  const [arrowLeft, setArrowLeft] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);
  
  const handleLclick = () => {
    setArrowLeft(true);
  }
  const handleRclick = () => {
    setArrowRight(true);
  }
  
 useEffect(() => {
   let docWidth = window.innerHeight * 9.26;
   if(arrowLeft){
     window.scrollTo({
      left: 0,
      behavior: "smooth",
    })
     setTimeout(() => {
      setArrowLeft(false);
    }, "100");
   }
   if(arrowRight){
     window.scrollTo({
      left: docWidth,
      behavior: "smooth",
    })
     setTimeout(() => {
      setArrowRight(false);
    }, "100");
 })

  return (
    <div className={styles.sectionThree}>
      <div className={styles.scrollToExplore}>
        <div
          ref={leftArrowRef}
          className={styles.arrowL}
          onClick={handleLclick()}
          alt="arrow left"
          
        ></div>
        <div
          ref={rightArrowRef}
          className={styles.arrowR}
          onClick={handleRclick()}
          alt="arrow right"
          
       ></div>
      </div>
    </div>
  );
};

export default SectionThree;
