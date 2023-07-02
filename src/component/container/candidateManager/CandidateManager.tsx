"use client";
import { useSearchParams, redirect } from "next/navigation";

import GroupButton from "@/component/button/GroupButton";
import CreateAccount from "@/component/modal/modalAccountCandidate/CreateAccount";
import CandidateManagerDataFormat from "./CandidateManagerDataFormat";

const dataButton: { text: string; href: string }[] = [
  { text: "All", href: "/ctv/candidateManager?key=all" },
  { text: "Mới nộp", href: "/ctv/candidateManager?key=initial" },
  { text: "PV nội bộ", href: "/ctv/candidateManager?key=internal_interview" },
  { text: "PV tại KH", href: "/ctv/candidateManager?key=cus_interview" },
  { text: "KH đề xuất", href: "/ctv/candidateManager?key=proposal" },
  { text: "Nhận việc", href: "/ctv/candidateManager?key=onboard" },
  { text: "Đang bảo hành", href: "/ctv/candidateManager?key=warranty" },
];

export default function CandidateManager() {
  const search = useSearchParams().get("key");
  if (!search) {
    redirect("/ctv/candidateManager?key=all");
  }

  return (
    <>
      <h1 className="font-[600] text-xl pb-4">Quản lý ứng viên</h1>
      <div className="flex items-center justify-between sm:flex-wrap">
        <GroupButton
          dataButton={dataButton}
          classButton={
            "px-3 py-1.5 normal-case text-[0.85rem] text-[#262626] border sm:mb-2"
          }
        />
        <CreateAccount
          nameButton={"Giới thiệu UV"}
          id={0}
          classNoneIcon={"hidden"}
        />
      </div>
      <div className="pt-4">
        <CandidateManagerDataFormat />
      </div>
    </>
  );
}
