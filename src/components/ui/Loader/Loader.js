import React from "react";
import { useSelector } from "react-redux";

import "./Loader.scss";

const Loader = () => {
  const { isAsyncCallRunning } = useSelector((state) => state.async);

  if (!isAsyncCallRunning) {
    return null;
  }

  return (
    <div className="app-loader">
      <div className="progress-horizontal">
        <div className="bar-horizontal"></div>
      </div>
      <div className="backdrop" />
    </div>
  );
};

export default Loader;
