"use client";
import { useSearchParams, redirect } from "next/navigation";

import GroupButton from "@/component/button/GroupButton";
import CreateAccount from "@/component/modal/modalAccountCandidate/CreateAccount";
import CandidateDataFormat from "./CandidateDataFormat";

const dataButton: { text: string; href: string }[] = [
  { text: "All", href: "/ctv/candidate?key=all" },
  { text: "Đang hoạt động", href: "/ctv/candidate?key=activity" },
  { text: "Bị khóa", href: "/ctv/candidate?key=lock" },
];

export default function Candidate() {
  const search = useSearchParams().get("key");
  if (!search) {
    redirect("/ctv/candidate?key=all");
  }

  return (
    <>
      <h1 className="font-[600] text-xl pb-4">Ứng viên</h1>
      <div className="flex items-center justify-between sm:flex-wrap">
        <GroupButton
          dataButton={dataButton}
          classButton={
            "px-3 py-1.5 normal-case text-[0.85rem] text-[#262626] border sm:mb-2"
          }
        />
        <CreateAccount
          nameButton={"Tạo tài khoản"}
          id={0}
          classNoneIcon={"block"}
        />
      </div>
      <div className="pt-4">
        <CandidateDataFormat />
      </div>
    </>
  );
}
