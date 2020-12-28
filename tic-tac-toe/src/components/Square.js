import React from "react";

const Square = (props) => {
  return (
    <div
      className={"square " + (props.value ? props.value : "")}
      onClick={props.onClick}
     />

    
  );
};

export default Square;
