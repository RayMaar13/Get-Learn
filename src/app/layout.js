import "./globals.css";
import { Navbar } from "@/app/_components/Navbar/Navbar";
import Footer from "./_components/Footer";

export const metadata = {
  title: "Get Learn",
  description: "Kursus Online Terbaik!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-blue-700 pb-8 md:pb-16">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
