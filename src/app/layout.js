import HeroHome from "@/components/Home/HeroHome";
import "./globals.css";
import Footer from "@/components/Home/Footer";


export const metadata = {
  title: "HandWritten Edge",
  description: "Hand Written Edge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeroHome/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
