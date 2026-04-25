import { Outlet } from "react-router-dom";
import React from "react";
import BaseContextProvider from "./store/BaseContextProvider";
export default function Base() {
  return (
    <>
      <BaseContextProvider>
        <Outlet />
      </BaseContextProvider>
    </>
  );
}
