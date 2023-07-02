import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import Drawer from "@mui/material/Drawer";
import DataNavbar from "./DataNavbar";
import styles from "./style.module.css";

export default function ModalNavbar() {
  const [tabletOpen, setTabletOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setTabletOpen(!tabletOpen);
  };
  return (
    <>
      <span
        className="p-2 hidden xl:block bg-hover-nav rounded-sm cursor-pointer"
        onClick={handleDrawerToggle}
      >
        <AiOutlineMenuFold className="text-xl" />
      </span>
      <Drawer
        variant="temporary"
        open={tabletOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 260 },
        }}
        className={`${styles.hidden_ccroll_modal_navbar} 2xl:hidden xl:block `}
      >
        <DataNavbar />
      </Drawer>
    </>
  );
}
