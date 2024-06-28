import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@/app/globals.css";
import NavBar from "@/app/ui/navBar";
import Footer from "@/app/ui/footer";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TÜBİOME | Türkiye Bilim Olimpiyatları Mezunları Topluluğu",
  description: "TÜBiome olarak ulusal ve uluslararası olimpiyatlara katılan öğrencilerin kariyerlerinin ilerleyen dönemlerinde yaşıtlarıyla ve olimpiyata hazırlanan alt dönemleriyle iletişim halinde kalmasını amaçlıyoruz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.className} flex flex-col min-h-screen`}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
