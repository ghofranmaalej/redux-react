import React from "react";
import { useSelector } from "react-redux";

export const ComponentB = () => {
  const name = useSelector((state) => state.names);

  return (
    <div>
      <h2>ComponentB</h2>
      <p>Name in ComponentB: {name}</p>
    </div>
  );
};
