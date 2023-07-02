import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

import styles from "../modalCandidate/style.module.css";
import DetailFormAccount from "./DetailFormAccount";

export default function CreateAccount({
  nameButton,
  id,
  classNoneIcon,
}: {
  nameButton: string;
  id: number;
  classNoneIcon: string;
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <button
        className="flex items-center py-1.5 px-3 rounded-md text-lg border hover:bg-rbox-button hover:text-white"
        onClick={handleOpen}
      >
        <span className={`pr-1 text-lg ${classNoneIcon}`}>
          <FaPlus />
        </span>
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
            <span className="text-xl font-[600]">Thông tin ứng viên</span>
            <AiOutlineClose
              onClick={handleClose}
              className="text-xl cursor-pointer"
            />
          </div>
          <DetailFormAccount />
        </Box>
      </Modal>
    </div>
  );
}
