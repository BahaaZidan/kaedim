import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

import CenteredContent from "../../templates/CenteredContent/CenteredContent";

const NotFound = () => {
  return (
    <CenteredContent>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link to="/">
            <Button type="primary">Back Home</Button>
          </Link>
        }
      />
    </CenteredContent>
  );
};

export default NotFound;
