import React from "react";

const MsgBox = ({ userName, textColor }) => {
  return (
    <div>
      <h1 style={{ color: textColor }}>Hello,{userName}</h1>
    </div>
  );
};

export default MsgBox;
