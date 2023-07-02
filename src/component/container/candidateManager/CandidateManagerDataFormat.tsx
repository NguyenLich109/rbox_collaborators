import { useState, useEffect } from "react";

import { GridColDef } from "@mui/x-data-grid";
import TableListCandidateAndManagement from "@/component/tables/TableListCandidateAndManagement";
import CreateAccount from "@/component/modal/modalAccountCandidate/CreateAccount";

const columns: GridColDef[] = [
  { field: "work", headerName: "Việc làm", flex: 3 },
  { field: "candidate", headerName: "Ứng viên", flex: 2 },
  { field: "email", headerName: "Email", flex: 2 },
  {
    field: "gender",
    headerName: "Giới tính",
    valueGetter: (params) => {
      const gender = params.row.gender;
      return gender === "M"
        ? "Nam"
        : gender === "F"
        ? "Nữ"
        : gender === "0"
        ? "Khác"
        : "Không xác định";
    },
    flex: 1,
  },
  { field: "date", headerName: "Ngày tạo", flex: 1 },
  {
    field: "status_pv",
    headerName: "Tình trạng PV",
    renderCell: (params) => (
      <button
        className={`${
          params.row.status_pv ? "bg-red-400" : "bg-green-400"
        } rounded-lg py-1 px-2 text-[14px] text-white`}
      >
        {params.row.status_pv ? "Bị khóa" : "Mới nộp"}
      </button>
    ),
    flex: 1.5,
  },
  { field: "brokerageFee", headerName: "Hoa hồng", flex: 1 },
  {
    field: "status",
    headerName: "Tình trạng",
    renderCell: (params) => (
      <button
        className={`${
          params.row.status ? "bg-red-400" : "bg-slate-400"
        } rounded-lg py-1 px-2 text-[14px] text-white`}
      >
        {params.row.status ? "Bị khóa" : "Chưa tính"}
      </button>
    ),
    flex: 1,
  },
  {
    field: "detail",
    headerName: "",
    flex: 1,
    renderCell: (params) => (
      <CreateAccount
        nameButton={"Chi tiết"}
        id={params.row.id}
        classNoneIcon={"hidden"}
      />
    ),
  },
];

const data: any = [
  {
    id: 1,
    work: "CHUYÊN VIÊN TUYỂN DỤNG-MIỀN NAM",
    candidate: "Nguyễn Văn Lịch",
    email: "Nguyenlich@gmail.com",
    gender: "M",
    date: "	01/06/2023",
    status_pv: false,
    brokerageFee: 1000000,
    status: false,
  },
];

export default function CandidateManagerDataFormat() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (data) {
      const x = data?.map((value: any) => {
        return {
          id: value.id,
          work: value.work,
          candidate: value.candidate,
          email: value.email,
          gender: value.gender,
          date: value.date,
          status_pv: value.status_pv,
          brokerageFee: value.brokerageFee,
          status: value.status,
        };
      });
      setRows(x);
    }
  }, [data]);
  return <TableListCandidateAndManagement columns={columns} rows={rows} />;
}
