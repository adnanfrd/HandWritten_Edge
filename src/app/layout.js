import "./globals.css";
import Footer from "@/components/Home/Footer";
import Navbar from "@/components/Home/Navbar";

export const metadata = {
  title: "HandWritten Edge",
  description: "Hand Written Edge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
