"use client";

import { Provider } from "react-redux";
import { makeStore } from "../redux/store";
import React from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const store = makeStore();
  return <Provider store={store}>{children}</Provider>;
}
