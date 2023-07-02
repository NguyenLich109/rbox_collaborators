import { PuffLoader } from "react-spinners";
const Loading = () => {
  return (
    <>
      <div className=" h-[70vh] flex flex-col justify-center items-center">
        <PuffLoader color="#F87320" size={75} />
      </div>
    </>
  );
};

export default Loading;
