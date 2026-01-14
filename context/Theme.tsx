"use client";

import { ThemeProviderProps } from "next-theme/dist/provider/index.props";
import React, { Provider } from "react";
import { ThemeProvider as NextThemesProvider } from "next-theme";
const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
