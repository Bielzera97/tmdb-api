import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientOnly from "@/components/ClientOnly";

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <ClientOnly>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
