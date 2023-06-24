import React from "react";

const Output = ({ output }) => {
  return (
    <div>
      <p>Name - {output.name}</p>
      <p>Age - {output.age}</p>
    </div>
  );
};

export default Output;
