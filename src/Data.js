import React from "react";
import { useGetAllProductsQuery } from "./redux/apiSlice";

export const Data = () => {
  const { data } = useGetAllProductsQuery();
  console.warn(data);
  return <div></div>;
};
