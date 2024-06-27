import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
