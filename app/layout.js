import { Barlow, Bellefair } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const bellefair = Bellefair({
  variable: "--font-bellefair",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Space Tourism",
  description:
    "Space Tourism Website is a fun challenge provided by Frontend Mentor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body
        className={`${barlow.variable} ${bellefair.variable} bg-homeMobile sm:bg-homeTablet lg:bg-homeDesktop bg-no-repeat bg-cover bg-center min-h-screen`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
