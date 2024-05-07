import React, { useState } from "react";
import { TReactProps } from "../../../index.types";
import { TJobModalProps } from "../type";
import { Box, Link, Modal, Paper } from "@mui/material";
import styles from "../jobs.module.css";

const JobModal: TReactProps<TJobModalProps> = (props) => {
  const { jobDetails } = props;
  const [open, setOpen] = useState(false);
  const handleModal = () => setOpen((pre) => !pre);
  return (
    <div>
      <Link underline="none" onClick={handleModal}>
        View job
      </Link>
      <Modal open={open} onClose={handleModal}>
        <Box className={styles["jd-modal"]}>
          <Paper>
            <p className={styles["jd-about"]}>About company</p>
            <p className={styles["jd-description"]}>{jobDetails}</p>
          </Paper>
        </Box>
      </Modal>
    </div>
  );
};

export default JobModal;
