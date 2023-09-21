import React from "react";
import { setName } from "./redux/nameSlice";
import { useDispatch } from "react-redux";

export const ComponentA = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>ComponentA</h2>
      <button
        onClick={(e) => {
          dispatch(setName("ok"));
        }}
      >
        Set Name
      </button>
    </div>
  );
};
