import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cybersecurity Events",
  description: "Detailed insights on cybersecurity incidents",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans-bold">
        {children}
      </body>
    </html>
  );
}
