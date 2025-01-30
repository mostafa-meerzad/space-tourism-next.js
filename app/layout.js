import { Barlow, Bellefair } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
});

const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Space Tourism",
  description: "Space Tourism Website is a fun challenge provided by Frontend Mentor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${barlow.variable} ${bellefair.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
