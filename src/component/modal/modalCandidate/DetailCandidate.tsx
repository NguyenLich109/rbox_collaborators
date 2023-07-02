"use client";
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./style.module.css";
import DetailedContent from "./DetailedContent";

interface data {
  classButton: string;
  nameButton: string;
}

export default function DetailCandidate({ nameButton, classButton }: data) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button className={classButton} onClick={handleOpen}>
        {nameButton}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box className={styles.modal_candidate_container}>
          <div className="flex items-center justify-between pb-3">
            <span className="text-xl font-[600]">Thông tin công việc</span>
            <AiOutlineClose
              onClick={handleClose}
              className="text-xl cursor-pointer"
            />
          </div>
          <DetailedContent />
        </Box>
      </Modal>
    </div>
  );
}
