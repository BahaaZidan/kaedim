import "./FullPageTable.css";

import React from "react";

const FullPageTable = (props: { children: any }) => (
  <div className="fullPageTable">
    <div className="contributorsTableContainer">{props.children}</div>
  </div>
);

export default FullPageTable;
