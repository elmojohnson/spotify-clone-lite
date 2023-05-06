import { CgSpinner } from "react-icons/cg";

const LoadingState = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <CgSpinner className="animate-spin text-primary text-4xl" />
    </div>
  );
};

export default LoadingState;
