import React from "react";
import emptyimg from "../../assets/images/box.png";
import Image from "next/image";
const Empty = () => {
  return (
    <div className="empty">
      <Image src={emptyimg} alt="empty" />
    </div>
  );
};

export default Empty;
