import "./globals.css";
import ToasterContext from "./context/ToasterContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Messenger App",
  description: "Real Time Messanger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ToasterContext />
        {children}
      </body>
    </html>
  );
}
