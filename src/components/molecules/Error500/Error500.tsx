import React from "react";
import { Result, Button } from "antd";

const Error500 = () => {
  const onClick = () => {
    window.location.reload();
  };

  return (
    <Result
      status="500"
      title="500"
      subTitle="Sorry, something went wrong."
      extra={
        <Button type="primary" onClick={onClick}>
          Refresh
        </Button>
      }
    />
  );
};

export default Error500;
