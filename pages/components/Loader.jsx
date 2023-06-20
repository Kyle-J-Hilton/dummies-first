import React from "react";
import AnimatedLogo from "../assets/images/loadinglogo.gif";
import StillLogo from "../assets/images/loadinglogostill.jpg";
import styles from "../../styles/Loader.module.css";
import Image from "next/image";

function Loader() {
  return (
    <div className={styles.loader}>
      <Image className={styles.logofirst} src={StillLogo} priority alt="loader" />
      <Image className={styles.logo} src={AnimatedLogo} alt="loader" />
    </div>
  );
}

export default Loader;
