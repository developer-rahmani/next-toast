import { ReactNode } from "react";

export type ChildrenType = {
    children  : ReactNode
}

export type ToastType = {
  msg: string;
};

export type ToastPropsType = {
  close: any;
  children: ReactNode;
};

export type ThemeStateType = {
  id: string | number;
  content: string;
}[];

export type ToastMessageType = {
  message: string;
};

export type StateContextToastType = {
  open: (message: string) => void;
};
