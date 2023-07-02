import { DataGrid } from "@mui/x-data-grid";
import "./tables.css";

export default function TableListCandidateAndManagement({
  columns,
  rows,
}: any) {
  return (
    <>
      <div className="w-[100%] overflow-auto">
        <DataGrid
          className="xl:w-[1279px] "
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
          autoHeight
          pageSizeOptions={[10, 15, 20, 25, 50, 100]}
        />
      </div>
    </>
  );
}
