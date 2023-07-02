"use client";
import { useState } from "react";
import { useSearchParams, redirect } from "next/navigation";
import { SelectChangeEvent } from "@mui/material/Select";

import GroupButton from "@/component/button/GroupButton";
import ListJobVacancy from "@/component/tables/ListJobVacancy";
import TableFilterCandidate from "@/component/tables/TableFilterCandidate";
import InputSearchCandidate from "@/component/button/InputSearchCandidate";

const dataButton: { text: string; href: string }[] = [
  { text: "Tất cả", href: "/ctv/employment?key=all" },
  { text: "Đã lưu", href: "/ctv/employment?key=saved" },
];

export default function Employment() {
  const search = useSearchParams().get("key");
  const [position, setPosition] = useState("");
  const [money, setMoney] = useState("");

  if (!search) {
    redirect("/ctv/employment?key=all");
  }

  const handleChangePosition = (event: SelectChangeEvent) => {
    setPosition(event.target.value);
    console.log(event.target.value);
  };

  const handleChangeMoney = (event: SelectChangeEvent) => {
    setMoney(event.target.value);
    console.log(event.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target[1].value);
  };

  return (
    <>
      <h1 className="font-[600] text-xl pb-4">Việc đang tuyển</h1>
      <div className="flex items-center justify-between">
        <GroupButton
          dataButton={dataButton}
          classButton={
            "px-3 py-1.5 normal-case text-[0.85rem] text-[#262626] border"
          }
        />
        <InputSearchCandidate handleSubmit={handleSubmit} />
      </div>
      <div className="grid grid-cols-4 gap-4 py-4 lg:grid-cols-1">
        <div className="col-span-3 lg:col-span-1">
          <ListJobVacancy />
        </div>
        <div className="border rounded-md py-2.5 px-4">
          <h1 className="font-[600] text-[1.1rem]">Lọc tìm kiếm</h1>
          <TableFilterCandidate
            position={position}
            money={money}
            handleChangePosition={handleChangePosition}
            handleChangeMoney={handleChangeMoney}
          />
        </div>
      </div>
    </>
  );
}
