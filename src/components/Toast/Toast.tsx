"use client"

// !! Types
import { ToastPropsType } from "./index.types";

// !! Hooks
import React, { useEffect, useRef } from "react";

export const Toast = ({ close, children }: ToastPropsType) => {
  const savedCallback = useRef(close);

  useEffect(() => {
    savedCallback.current = close;
  }, [close]);

  useEffect(() => {
    const id = setTimeout(() => savedCallback.current(), 3000);

    return () => clearTimeout(id);
  }, []);

  return (
    <div className="toast rounded-[4px] p-[12px] bg-gray-800 text-gray-200 text-md w-[300px] shadow-lg">
      <div className="flex items-center gap-[12px]">
        <span className="flex-1">{children}</span>
      </div>
    </div>
  );
};
