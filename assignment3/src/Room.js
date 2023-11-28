import React from "react";

const Room = ({ name, img }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={img} height="100px" width="100px" />
    </div>
  );
};

export default Room;
