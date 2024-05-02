import React from "react";
import { Bars } from "react-loader-spinner";

const LoadingCustom: React.FC = () => (
  <div className="bg-[#2c402f66] absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center">
    <Bars
      height="80"
      width="80"
      color="#FFF"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);
export default LoadingCustom;
