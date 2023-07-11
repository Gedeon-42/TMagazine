import Navbar from "./components/Navbar";
import Footerbar from "./components/footer";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "daily magazine sport",
  description: "sport is a key",
  keywords: " mukura victory sport, rayon sport ,umupira wo murwanda",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main className="container">{children}</main>
        <Footerbar />
      </body>
    </html>
  );
}
