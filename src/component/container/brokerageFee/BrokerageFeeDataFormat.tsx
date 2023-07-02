import { useState, useEffect } from "react";

import { GridColDef } from "@mui/x-data-grid";
import TableListCandidateAndManagement from "@/component/tables/TableListCandidateAndManagement";

const columns: GridColDef[] = [
  { field: "month", headerName: "Tháng", flex: 2 },
  { field: "day", headerName: "Ngày tính", flex: 2 },
  { field: "paid", headerName: "Đã trả", flex: 2 },
  { field: "remaining", headerName: "Còn lại", flex: 1 },
  { field: "sumRose", headerName: "Tổng hoa hồng", flex: 2 },
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
];

const data: any = [];

export default function BrokerageFeeDataFormat() {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    if (data) {
      const x = data?.map((value: any) => {
        return {
          id: value.id,
          month: value.month,
          day: value.day,
          paid: value.paid,
          remaining: value.remaining,
          sumRose: value.sumRose,
          status: value.status,
        };
      });
      setRows(x);
    }
  }, [data]);
  return <TableListCandidateAndManagement columns={columns} rows={rows} />;
}
