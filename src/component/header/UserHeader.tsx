import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { AiOutlineLogout, AiOutlineEdit, AiOutlineLock } from "react-icons/ai";
import "./style.css";

export default function UserHeader() {
  const [turnOn, setTurnOn] = useState<null | HTMLElement>(null);
  const open = Boolean(turnOn);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setTurnOn(event.currentTarget);
  };
  const handleClose = () => {
    setTurnOn(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={open ? "bg-hover-nav" : "hover:bg-hover-nav"}
      >
        <img
          src="https://s.net.vn/6NUR"
          className="w-8 h-8 rounded-[50%]"
        ></img>
        <span className="capitalize text-sm1 text-[#262626] pl-1 font-[600]">
          Nguyễn Lịch
        </span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={turnOn}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={`user_modal_header min-w-[260px]`}
      >
        <div className="flex items-center justify-between px-4 py-2.5 border-b">
          <div className="flex items-center">
            <img
              src="https://s.net.vn/6NUR"
              className="w-9 h-9 rounded-[50%]"
            ></img>
            <div className="pl-1">
              <p className="capitalize text-sm1 text-[#262626] pl-1">
                Nguyễn Lịch
              </p>
              <p className="capitalize text-sm text-rose-500 pl-1">
                Cộng tác viên
              </p>
            </div>
          </div>
          <span className="text-4xl cursor-pointer">
            <AiOutlineLogout />
          </span>
        </div>
        <li
          onClick={handleClose}
          className="flex items-center pl-4 pr-3 py-3 text-lg cursor-pointer hover:bg-hover-nav "
        >
          <AiOutlineEdit className="mr-2 text-xl" />
          Cập nhật thông tin
        </li>
        <li
          onClick={handleClose}
          className="flex items-center pl-4 pr-3 py-3 text-lg cursor-pointer hover:bg-hover-nav"
        >
          <AiOutlineLock className="mr-2 text-xl" />
          Đổi mật khẩu
        </li>
        <li
          onClick={handleClose}
          className="flex items-center pl-4 pr-3 py-3 text-lg cursor-pointer hover:bg-hover-nav"
        >
          <AiOutlineLogout className="mr-2 text-xl" />
          Đăng xuất
        </li>
      </Menu>
    </div>
  );
}
