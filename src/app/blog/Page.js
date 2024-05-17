import React, { memo } from "react";
import Empty from "../components/empty/Empty";

const Blog = () => {
  return (
    <div className="blog">
      <Empty />
    </div>
  );
};

export default memo(Blog);
