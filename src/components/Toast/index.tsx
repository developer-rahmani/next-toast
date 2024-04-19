"use client";

// !! Types
import {
  ChildrenType,
  StateContextToastType,
  ThemeStateType,
} from "./index.types";

// !! Hooks
import React, { useState, useMemo, createContext } from "react";

// !! Components
import { createPortal } from "react-dom";
import { Toast } from "./Toast";

// Create a random ID
function generateUEID() {
  let first: string | number = (Math.random() * 46656) | 0;
  let second: string | number = (Math.random() * 46656) | 0;
  first = ("000" + first.toString(36)).slice(-3);
  second = ("000" + second.toString(36)).slice(-3);

  return first + second;
}

export const StateContextToast = createContext<StateContextToastType>({
  open: (message: string) => message,
});

export const ContextToast = ({ children }: ChildrenType) => {
  const [toasts, setToasts] = useState<ThemeStateType>([]);

  const open = (message: string) =>
    setToasts((currentToasts) => [
      ...currentToasts,
      { id: generateUEID(), content: message },
    ]);

  const close = (id: string | number) =>
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id)
    );

  const contextValue = useMemo(() => ({ open }), []);


  console.log("toasts",toasts)

  return (
    <StateContextToast.Provider value={contextValue}>
      {children}

      {typeof window !== "undefined" &&
        createPortal(
          toasts.length >= 1 && (
            <div className="fixed top-[12px] left-[50%] translate-x-[-50%] z-[2] flex flex-col gap-[12px]">
              {toasts.map((toast) => (
                <Toast key={toast.id} close={() => close(toast.id)}>
                  {toast.content}
                </Toast>
              ))}
            </div>
          ),
          document.body
        )}
    </StateContextToast.Provider>
  );
};
