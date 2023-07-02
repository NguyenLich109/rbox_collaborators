import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";

const filterPosition: { name: string }[] = [
  { name: "Mới tốt nghiệp, thực tập sinh" },
  { name: "Nhân viên" },
  { name: "Trưởng nhóm" },
  { name: "Trường Phòng/Phó Phòng" },
  { name: "Phó giám đốc" },
  { name: "Giám đốc" },
  { name: "Tổng giám đốc điều hành" },
  { name: "Trợ Lý/Thư Ký" },
  { name: "Chuyên viên" },
  { name: "Quản Lý/Giám Sát" },
];

const filterMoney: { name: string; min: number; max: number }[] = [
  { name: "Dưới 10 triều", min: 0, max: 10000000 },
  { name: "Từ 10 - 15 triệu", min: 10000000, max: 15000000 },
  { name: "Từ 15 - 20 triệu", min: 15000000, max: 20000000 },
  { name: "Từ 20 - 30 triệu", min: 20000000, max: 30000000 },
  { name: "Từ 30 - 40 triệu", min: 30000000, max: 40000000 },
  { name: "Từ 40 - 50 triệu", min: 40000000, max: 50000000 },
  { name: "Trên 50 triệu", min: 50000000, max: 50000000000 },
];

interface typeTableFilter {
  position: string;
  money: string;
  handleChangePosition: any;
  handleChangeMoney: any;
}

export default function TableFilterCandidate({
  position,
  money,
  handleChangePosition,
  handleChangeMoney,
}: typeTableFilter) {
  return (
    <>
      <FormControl>
        <div>
          <h1 className="font-[600] text-[0.95rem] py-1">Chức vụ</h1>
          <RadioGroup
            name="radio-buttons-group"
            value={position}
            onChange={handleChangePosition}
          >
            {filterPosition.map((value, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={value.name}
                  control={<Radio />}
                  label={<span className="text-lg">{value.name}</span>}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: "1.2rem",
                      color: "#F87320",
                    },
                  }}
                />
              );
            })}
          </RadioGroup>
        </div>
        <div>
          <h1 className="font-[600] text-[0.95rem] py-1">Mức lương</h1>
          <RadioGroup
            name="radio-buttons-group"
            value={money}
            onChange={handleChangeMoney}
          >
            {filterMoney.map((value, index) => {
              return (
                <FormControlLabel
                  key={index}
                  value={`min:${value.min}-max:${value.max}`}
                  control={<Radio />}
                  label={<span className="text-lg">{value.name}</span>}
                  sx={{
                    "& .MuiSvgIcon-root": {
                      fontSize: "1.2rem",
                      color: "#F87320",
                    },
                  }}
                />
              );
            })}
          </RadioGroup>
        </div>
      </FormControl>
    </>
  );
}
