import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

import "./tables.css";

interface typeRows {
  id: number;
  name: string;
  email: string;
  phone: number;
  gender: string;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Họ tên", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "phone", headerName: "Phone", flex: 1 },
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
];

const data = [
  { id: 1, name: "Snow", email: "Jon", phone: 35, gender: "M" },
  { id: 2, name: "Lannister", email: "Cersei", phone: 42, gender: "M" },
  { id: 3, name: "Lannister", email: "Jaime", phone: 45, gender: "F" },
  { id: 4, name: "Stark", email: "Arya", phone: 16, gender: "F" },
  { id: 5, name: "Targaryen", email: "Daenerys", phone: 45, gender: "F" },
  { id: 6, name: "Melisandre", email: "Davit", phone: 15, gender: "M" },
  { id: 7, name: "Clifford", email: "Ferrara", phone: 44, gender: "0" },
  { id: 8, name: "Frances", email: "Rossini", phone: 36, gender: "M" },
];

export default function TableIntroduceCandidate() {
  const [rows, setRows] = useState<typeRows[]>([]);
  const [arrs, setArrs] = useState<number[]>([]);
  useEffect(() => {
    if (data) {
      const x = data.map((value) => {
        return {
          id: value.id,
          name: value.name,
          email: value.email,
          phone: value.phone,
          gender: value.gender,
        };
      });
      setRows(x);
    }
  }, [data]);
  const handleDouble = (value: any) => {
    if (!value.value) {
      setArrs((arr) => [...arr, value.row.id]);
    }
    if (value.value) {
      const filter = arrs.filter((id) => id !== value.row.id);
      setArrs(filter);
    }
  };

  return (
    <>
      <div className=" w-[100%] h-[79vh] overflow-auto">
        <DataGrid
          className="xl:w-[1279px]"
          onCellClick={handleDouble}
          rows={rows}
          columns={columns}
          localeText={{
            noRowsLabel: "Không có dữ liệu",
          }}
          hideFooterSelectedRowCount
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[10, 15, 20, 25, 50, 100]}
          autoHeight
          checkboxSelection
        />
      </div>
    </>
  );
}
