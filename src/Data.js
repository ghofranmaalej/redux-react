import React from "react";
import { useGetAllProductsQuery, useGetProductQuery } from "./redux/apiSlice";

export const Data = () => {
  const {
    data: allProductData,
    error,
    isError,
    isLoading,
  } = useGetAllProductsQuery();
  const { data: singleProductData } = useGetProductQuery("iphone");

  console.warn(allProductData);
  console.warn(singleProductData);
  if(isLoading) return <h1>Loading ...</h1>
  return <div>Data : </div>;
};
