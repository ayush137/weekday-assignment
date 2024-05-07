import React from "react";
import { TReactProps } from "../../index.types";
import styles from "../common.module.css";
import { Button } from "@mui/material";
const CustomButton: TReactProps<{ type: "referral" | "apply" }> = (props) => {
  const { children, type } = props;
  return (
    <Button
      className={`${styles["custom-button"]} ${
        styles[type === "apply" ? "apply" : "referral"]
      }`}
      variant="contained"
      fullWidth
    >
      {children}
    </Button>
  );
};

export default CustomButton;
