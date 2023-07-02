import { useState, useEffect } from "react";

import { GridColDef } from "@mui/x-data-grid";
import TableListCandidateAndManagement from "@/component/tables/TableListCandidateAndManagement";
import CreateAccount from "@/component/modal/modalAccountCandidate/CreateAccount";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 2 },
  { field: "email", headerName: "Email", flex: 2 },
  { field: "phone", headerName: "Phone", flex: 2 },
  { field: "dob", headerName: "DoB", flex: 1 },
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
  { field: "date", headerName: "Ngày tạo", flex: 2 },
  {
    field: "status",
    headerName: "Tình trạng",
    renderCell: (params) => (
      <button
        className={`${
          params.row.status ? "bg-red-400" : "bg-green-400"
        } rounded-lg py-1 px-2 text-[14px] text-white`}
      >
        {params.row.status ? "Bị khóa" : "Đang hoạt động"}
      </button>
    ),
    flex: 2,
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
    name: "Nguyễn Văn Lịch",
    email: "Nguyenlich@gmail.com",
    phone: "0123456789",
    dob: "31/12/2004",
    gender: "M",
    date: "	01/06/2023 08:49",
    status: true,
  },
  {
    id: 2,
    name: "Nguyễn Văn Lịch",
    email: "Nguyenlich@gmail.com",
    phone: "0123456789",
    dob: "31/12/2004",
    gender: "F",
    date: "	01/06/2023 08:49",
    status: false,
  },
];

export default function CandidateDataFormat() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (data) {
      const x = data?.map((value: any) => {
        return {
          id: value.id,
          name: value.name,
          email: value.email,
          phone: value.phone,
          dob: value.dob,
          gender: value.gender,
          date: value.date,
          status: value.status,
        };
      });
      setRows(x);
    }
  }, [data]);
  return <TableListCandidateAndManagement columns={columns} rows={rows} />;
}
