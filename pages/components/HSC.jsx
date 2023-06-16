import React, { useState, useRef, useEffect } from "react";

import styles from "../../styles/SideScroll.module.css";
import SectionOne from "./SideScrollSections/SectionOne";
import SectionTwo from "./SideScrollSections/SectionTwo";
import SectionThree from "./SideScrollSections/SectionThree";
import SectionFour from "./SideScrollSections/SectionFour";
import SectionFive from "./SideScrollSections/SectionFive";


const HSC = () => {
 

  useEffect(() => {
    let docWidth = window.innerHeight * 9.26;
    let windowWidth = window.innerWidth;
    let scrollToPosition = docWidth / 2 - windowWidth / 2;
    window.scrollTo(scrollToPosition, 0);
  }, []);

  const contentRef = useRef(null);
  let scrollDelta = 0;
  let requestId;

  const dragScroll = (e) => {
    e.preventDefault();
    const startX = e.pageX || (e.touches && e.touches[0].pageX);
    const dragScrollSpeed = 0.5;
  

    const handleMouseMove = (e) => {
      e.preventDefault();
      const x = e.touches ? e.touches[0].pageX : e.pageX;
      scrollDelta = ((x - startX) * dragScrollSpeed) / 3;
      window.cancelAnimationFrame(requestId);
      requestId = window.requestAnimationFrame(scrollPage);
     
    };

    const handleMouseUp = () => {
      setTimeout(() => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchmove", handleMouseMove);
        document.removeEventListener("touchend", handleMouseUp);
        window.cancelAnimationFrame(requestId);

      }, 300);
    };

    

    const scrollPage = () => {
      document.documentElement.scrollLeft -= scrollDelta;
      document.body.scrollLeft -= scrollDelta;

      if (scrollDelta > 0) {
        scrollDelta -= 0.2;

        if (scrollDelta < 0) scrollDelta = 0;
        requestId = window.requestAnimationFrame(scrollPage);
      } else if (scrollDelta < 0) {
        scrollDelta += 0.2;

        if (scrollDelta > 0) scrollDelta = 0;
        requestId = window.requestAnimationFrame(scrollPage);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("touchend", handleMouseUp);
  };

  const scrollHorizontally = (e) => {
    e.preventDefault();
    e = window.event || e;
    const delta = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
    const scrollSpeed = calculateScrollSpeed(e);
    document.documentElement.scrollLeft -= delta * scrollSpeed;
    document.body.scrollLeft -= delta * scrollSpeed;
    const container = contentRef.current;
    const sections = container.querySelectorAll(".sections");
    sections.forEach((section, index) => {
      const distance = section.dataset.distance || 0;
      const scroll = (container.scrollLeft / container.scrollWidth) * 100;
      section.style.setProperty("--scroll", scroll);
      section.style.setProperty("--distance", distance);
    });
  };

  const calculateScrollSpeed = (e) => {
    const delta = e.wheelDelta || -e.detail;
    const velocity = Math.abs(delta / 3);
    const minScrollSpeed = 2;
    const maxScrollSpeed = 20;
    const scrollSpeed =
      minScrollSpeed + (velocity / 100) * (maxScrollSpeed - minScrollSpeed);
    return scrollSpeed;
  };

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in document.documentElement;
    const scrollEvent = isTouchDevice ? "touchmove" : "mousewheel";
    const firefoxScrollEvent = "DOMMouseScroll";

    if (window.addEventListener) {
      contentRef.current.addEventListener("mousedown", dragScroll);
      contentRef.current.addEventListener("touchstart", dragScroll);
      document.addEventListener(scrollEvent, scrollHorizontally, {
        passive: false,
      });
      contentRef.current.addEventListener("touchend", dragScroll);
      document.addEventListener(firefoxScrollEvent, scrollHorizontally, {
        passive: false,
      });
    } else {
      contentRef.current.attachEvent("onmousedown", dragScroll);
      contentRef.current.attachEvent("ontouchstart", dragScroll);
      document.attachEvent("on" + scrollEvent, scrollHorizontally);
      contentRef.current.attachEvent("ontouchend", dragScroll);
      document.attachEvent("on" + firefoxScrollEvent, scrollHorizontally);
    }

    return () => {
      if (window.removeEventListener) {
        contentRef.current.removeEventListener("mousedown", dragScroll);
        document.removeEventListener(scrollEvent, scrollHorizontally, {
          passive: false,
        });
        document.removeEventListener(firefoxScrollEvent, scrollHorizontally, {
          passive: false,
        });
      } else {
        contentRef.current.detachEvent("onmousedown", dragScroll);
        document.detachEvent("on" + scrollEvent, scrollHorizontally);
        document.detachEvent("on" + firefoxScrollEvent, scrollHorizontally);
      }
    };
  }, []);

  return (
    <div className={styles.container}>
      <div ref={contentRef} className={styles.horizontalScrollContainer}>
        <SectionOne className={styles.sections} />
        <SectionTwo className={styles.sections} />
        <SectionThree className={styles.sections} />
        <a href='https://twitter.com/DummiesLab' className={styles.links}> </a>
        <SectionFour className={styles.sections} />
        <SectionFive className={styles.sections} />
      </div>
    </div>
  );
};
export default HSC;

