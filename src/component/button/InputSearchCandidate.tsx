import React from "react";
import InputBase from "@mui/material/InputBase";
import { AiOutlineSearch } from "react-icons/ai";

interface typeInputSearch {
  handleSubmit: any;
}

export default function InputSearchCandidate({
  handleSubmit,
}: typeInputSearch) {
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center border py-1 rounded-md"
      >
        <button className="px-2 cursor-pointer">
          <AiOutlineSearch className="text-xl" />
        </button>
        <InputBase
          sx={{ flex: 1, fontSize: "0.9rem" }}
          placeholder="Tìm kiếm công việc"
        />
      </form>
    </>
  );
}
