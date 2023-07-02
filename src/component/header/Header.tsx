import React from "react";

import UserHeader from "./UserHeader";
import ModalNavbar from "../modal/modalNav/ModalNavbar";
import NotificationUser from "./NotificationUser";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="header border-b flex items-center pl-4 justify-end h-height-header xl:justify-between xl:pr-4 ">
        <ModalNavbar />
        <div className="flex items-center">
          <NotificationUser />
          <UserHeader />
        </div>
      </div>
    </>
  );
}
