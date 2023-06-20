import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/SideScroll.module.css";
import SectionOne from "./SideScrollSections/SectionOne";
import SectionTwo from "./SideScrollSections/SectionTwo";
import SectionThree from "./SideScrollSections/SectionThree";
import SectionFour from "./SideScrollSections/SectionFour";
import SectionFive from "./SideScrollSections/SectionFive";
import RippleLink from "./RippleLink";

const HSC = () => {
  
  useEffect(() => {
    let docWidth = window.innerHeight * 9.26;
    let windowWidth = window.innerWidth;
    let scrollToPosition = docWidth / 2 - windowWidth / 2;
    window.scrollTo(scrollToPosition, 0);
  });

  const contentRef = useRef(null);
  let startX = 0;
  let scrollDelta = 0;
  let requestId;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Simulate loading completion after 2 seconds (replace this with your own loading logic)
    setTimeout(() => {
      setIsLoading(true);
    }, 5200);
   setTimeout(() => {
      setIsLoading(false);
    }, 6000);
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


  const [tStartX, setTStartX] = useState();
  const [tStartY, setTStartY] = useState();
  
const handleTouchStart = (e) => {
  setTStartX(e.touches[0].pageX);
  setTStartY(e.touches[0].pageY);
  scrollDelta = 0;
  window.cancelAnimationFrame(requestId);
};

const handleTouchMove = (e) => {
  e.preventDefault();
  const x = e.touches[0].pageX;
  const y = e.touches[0].pageY;
  const deltaX = tStartX - x;
  const deltaY = tStartY - y;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
    // Horizontal scrolling
    scrollDelta = deltaX / 3;
  } else {
    // Vertical scrolling
    scrollDelta = deltaY / 3;
  }

  window.cancelAnimationFrame(requestId);
  requestId = window.requestAnimationFrame(tScrollPage);
};

const handleTouchEnd = () => {
  setTimeout(() => {
    window.cancelAnimationFrame(requestId);
  }, 100);
};

const tScrollPage = () => {
  document.documentElement.scrollLeft += scrollDelta;
  document.body.scrollLeft += scrollDelta;

 if (scrollDelta > 0) {
        scrollDelta -= 0.2;

        if (scrollDelta < 0) scrollDelta = 0;
        requestId = window.requestAnimationFrame(tScrollPage);
      } else if (scrollDelta < 0) {
        scrollDelta += 0.2;

        if (scrollDelta > 0) scrollDelta = 0;
        requestId = window.requestAnimationFrame(tScrollPage);
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
      minScrollSpeed + (velocity / 50) * (maxScrollSpeed - minScrollSpeed);
    return scrollSpeed;
  };

  useEffect(() => {
   
    const firefoxScrollEvent = "DOMMouseScroll";

    if (window.addEventListener) {
      contentRef.current.addEventListener("mousedown", dragScroll);
      contentRef.current.addEventListener("touchstart", handleTouchStart, {passive: true});
      contentRef.current.addEventListener("touchmove", handleTouchMove, {passive: true});
      contentRef.current.addEventListener("touchend", handleTouchEnd, {passive: true});
      
      document.addEventListener("mousewheel", scrollHorizontally, {
        passive: false,
      });
      document.addEventListener(firefoxScrollEvent, scrollHorizontally, {
        passive: false,
      });
    } else {
      contentRef.current.addEventListener("mousedown", dragScroll);
      contentRef.current.addEventListener("touchstart", handleTouchStart, {passive: true});
      contentRef.current.addEventListener("touchmove", handleTouchMove, {passive: true});
      contentRef.current.addEventListener("touchend", handleTouchEnd, {passive: true});
     
      document.attachEvent("on" + "mousewheel", scrollHorizontally);
      document.attachEvent("on" + firefoxScrollEvent, scrollHorizontally);
    }

    return () => {
      if (window.removeEventListener) {
         contentRef.current.removeEventListener("mousedown", dragScroll);
         contentRef.current.removeEventListener("touchstart", handleTouchStart);
         contentRef.current.removeEventListener("touchmove", handleTouchMove);
         contentRef.current.removeEventListener("touchend", handleTouchEnd);
       
        document.removeEventListener("mousewheel", scrollHorizontally, {
          passive: false,
        });
        document.removeEventListener(firefoxScrollEvent, scrollHorizontally, {
          passive: false,
        });
      } else {
         contentRef.current.removeEventListener("mousedown", dragScroll);
         contentRef.current.removeEventListener("touchstart", handleTouchStart);
         contentRef.current.removeEventListener("touchmove", handleTouchMove);
         contentRef.current.removeEventListener("touchend", handleTouchEnd);
     
        document.detachEvent("on" + "mousewheel", scrollHorizontally);
        document.detachEvent("on" + firefoxScrollEvent, scrollHorizontally);
      }
    };
  }, []);


  return (
    <div className={styles.container}>
      <div ref={contentRef} className={styles.horizontalScrollContainer + (isLoading ? ` ${styles.jiggle}` : "")}>
        <SectionOne className={styles.sections} />
        <SectionTwo className={styles.sections} />
        <SectionThree className={styles.sections} />
        <RippleLink />
        <SectionFour className={styles.sections} />
        <SectionFive className={styles.sections} />
      </div>
    </div>
  );
};

export default HSC;
