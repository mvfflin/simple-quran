"use client"

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { useEffect, useState } from "react";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
    return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}