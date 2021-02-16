import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingSpinner = () => (
  <Spin
    indicator={
      <LoadingOutlined style={{ fontSize: 24, color: "black" }} spin />
    }
  />
);

export default LoadingSpinner;
