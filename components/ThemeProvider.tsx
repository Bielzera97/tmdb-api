"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export function ThemeProvider({
  children,
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange // Evita transições desnecessárias ao mudar o tema
    >
      {children}
    </NextThemesProvider>
  );
}
