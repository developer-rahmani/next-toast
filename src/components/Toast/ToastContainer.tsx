"use client";

// !! Hooks
import React, { useContext } from "react";

// !! Context
import { StateContextToast } from ".";

const ToastContainer = () => {
  const toast = useContext(StateContextToast);

  return <button className="py-[12px] px-[24px] bg-gray-700 rounded-md" onClick={() => toast.open("This is a test")}>Click me</button>;
};

export default ToastContainer;
