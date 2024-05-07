import React from "react";
import { TReactProps } from "../../index.types";
import styles from "../common.module.css";

const Tag: TReactProps = (props) => {
  const { children } = props;
  return <div className={styles["tag"]}>{children}</div>;
};

export default Tag;
