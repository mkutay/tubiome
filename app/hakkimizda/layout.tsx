import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: 'Hakkımızda',
  description: 'Türkiye Bilim Olimpiyatları Mezunları Topluluğu olarak bizim kim olduğumuz.',
  keywords: ['yurt dışı', 'eğitim', 'sat', 'act', 'ielts', 'ingilizce testi'],
  openGraph: {
    title: 'Hakkımızda',
    description: 'Türkiye Bilim Olimpiyatları Mezunları Topluluğu olarak bizim kim olduğumuz.',
    url: siteConfig.url,
    siteName: siteConfig.name + '/hakkimizda',
    locale: 'tr_TR',
    type: 'article',
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-2xl justify-center">
        {children}
      </div>
    </section>
  );
}
