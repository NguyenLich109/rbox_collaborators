import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";

import styles from "./style.module.css";
import TableIntroduceCandidate from "@/component/tables/TableIntroduceCandidate";

interface data {
  classButton: string;
  nameButton: string;
}

export default function IntroduceCandidate({ nameButton, classButton }: data) {
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
            <span className="text-xl font-[600]">Giới thiệu ứng viên</span>
            <AiOutlineClose
              onClick={handleClose}
              className="text-xl cursor-pointer"
            />
          </div>
          <div className="mb-2 flex justify-end">
            <button className={`${classButton}`}>Giới thiệu</button>
          </div>
          <TableIntroduceCandidate />
        </Box>
      </Modal>
    </div>
  );
}
