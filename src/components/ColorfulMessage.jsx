import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    // color: color,
    color,
    fontSize: "18px" //reactではキャメル
  };
  // return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
  // const contentStyle = {
  //   color: props.color,
  //   fontSize: "18px" //reactではキャメル
  // };
  // // return <p style={contentStyle}>{props.message}</p>;
  // return <p style={contentStyle}>{props.children}</p>;
};

// export default ColorfulMessage;
