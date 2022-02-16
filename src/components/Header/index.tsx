import * as React from "react";
import JsIcon from "components/Logos/JsIcon";
import Nav from "components/Navigation";
import BrandIcon from "components/Logos/BrandIcon";
import LinkedIn from "components/Logos/LinkedIn";
import styles from "./header.module.scss";
import Css from "components/Logos/Css";
import Html from "components/Logos/Html";
import NodeJs from "components/Logos/NodeJs";
import NextJsLogo from "components/Logos/next-js";
import ReactJs from "components/Logos/ReactJs";
import TypescriptLogo from "components/Logos/typescript";
import MongoDb from "components/Logos/MongoDb";
import DockerLogo from "components/Logos/Docker";

const Header = () => (
  <div className={styles.headerContainer}>
    <div className={styles.headerLogo}>
      <BrandIcon className={styles.redLogo} />
      <BrandIcon className={styles.blueLogo} />
      <div>
        <span className={styles.webDeveloper}>Web Developer</span>
        <span className={styles.contractor}>Contractor</span>
      </div>
    </div>
    <div className={styles.iconGrid}>
      <JsIcon />
      <Css />
      <Html />
      <NodeJs />
      <NextJsLogo />
      <ReactJs />
      <TypescriptLogo />
      <MongoDb />
      <DockerLogo />
    </div>
    <Nav />
    <div className="social">
      <LinkedIn />
    </div>
  </div>
);

export default Header;
