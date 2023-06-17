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
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading completion after 2 seconds (replace this with your own loading logic)
    setTimeout(() => {
      setIsLoading(true);
    }, 5500);
   setTimeout(() => {
      setIsLoading(false);
    }, 6200);
  }, []);


  const dragScroll = (e) => {
    e.preventDefault();
    const startX = e.pageX || (e.touches && e.touches[0].pageX);
    const dragScrollSpeed = 0.5;
    let scrollDelta = 0;
    let requestId;

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
   
  }; 

    
    let touchStartX = 0;
    let touchScrollDelta = 0;
    let requestTouchId;
    let touchScrollSpeed= 7;

    const handleTouchStart = (e) => {
     e.preventDefault();
     touchStartX = e.touches[0].pageX;
     touchScrollDelta = 0;
     window.cancelAnimationFrame(requestTouchId);
    
    }

      const handleTouchMove = (e) => {
        e.preventDefault();
        const x = e.touches ? e.touches[0].pageX : e.pageX;
        touchScrollDelta = ((x - touchStartX) * touchScrollSpeed) / 3;
        window.cancelAnimationFrame(requestTouchId);
        requestId = window.requestAnimationFrame(scrollPageTouch);
      };

      const handleTouchUp = () => {
       e.preventDefault();
        setTimeout(() => {
          document.removeEventListener("touchmove", handleTouchMove);
          document.removeEventListener("touchend", handleTouchUp);
          window.cancelAnimationFrame(requestTouchId);

         }, 500);
      };

      const scrollPageTouch = () => {
        document.documentElement.scrollLeft -= touchScrollDelta;
        document.body.scrollLeft -= touchScrollDelta;

        if (touchScrollDelta > 0) {
          touchScrollDelta -= 0.2;

          if (touchScrollDelta < 0) touchScrollDelta = 0;
            requestTouchId = window.requestAnimationFrame(scrollPageTouch);
        } else if (touchScrollDelta < 0) {
          touchScrollDelta += 0.2;

          if (touchScrollDelta > 0) touchScrollDelta = 0;
            requestTouchId = window.requestAnimationFrame(scrollPageTouch);
          }
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
      contentRef.current.addEventListener("ontouchstart", handleTouchStart);
      contentRef.current.addEventListener("touchmove", handleTouchMove);
      contentRef.current.addEventListener("touchend", handleTouchUp);
      document.addEventListener(scrollEvent, scrollHorizontally, {
        passive: false,
      });
      document.addEventListener(firefoxScrollEvent, scrollHorizontally, {
        passive: false,
      });
    } else {
      contentRef.current.attachEvent("onmousedown", dragScroll);
     contentRef.current.attachEvent("ontouchstart", handleTouchStart);
     contentRef.current.addEventListener("touchmove", handleTouchMove);
      contentRef.current.addEventListener("touchend", handleTouchUp);
      document.attachEvent("on" + scrollEvent, scrollHorizontally);
      document.attachEvent("on" + firefoxScrollEvent, scrollHorizontally);
    }

    return () => {
      if (window.removeEventListener) {
        contentRef.current.removeEventListener("mousedown", dragScroll);
       contentRef.current.removeEventListener("ontouchstart", handleTouchStart);
        contentRef.current.removeEventListener("touchmove", handleTouchMove);
        contentRef.current.removeEventListener("touchend", handleTouchUp);
        document.removeEventListener(scrollEvent, scrollHorizontally, {
          passive: false,
        });
        document.removeEventListener(firefoxScrollEvent, scrollHorizontally, {
          passive: false,
        });
      } else {
        contentRef.current.detachEvent("onmousedown", dragScroll);
       contentRef.current.detachEvent("ontouchstart", handleTouchStart);
        contentRef.current.removeEventListener("touchmove", handleTouchMove);
        contentRef.current.removeEventListener("touchend", handleTouchUp);
        document.detachEvent("on" + scrollEvent, scrollHorizontally);
        document.detachEvent("on" + firefoxScrollEvent, scrollHorizontally);
      }
    };
  }, []);

  return (
    <div className={styles.container }>
      <div ref={contentRef} className={styles.horizontalScrollContainer + (isLoading ? ` ${styles.jiggle}` : "")}>
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

