import CandidateManagerClient from "./CandidateManagerClient";

export const metadata = {
  title: "Quản lý ứng viên",
  description: "Chào mừng đến với Rbox",
};

export default function Manager() {
  return (
    <div>
      <CandidateManagerClient />
    </div>
  );
}
