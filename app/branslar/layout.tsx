import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: 'Branşlar',
  description: 'Türkiye Bilim Olimpiyatları Mezunları Topluluğu olarak üzerinde çalıştığımız bilim olimpiyatları branşları.',
  keywords: ['yurt dışı', 'eğitim', 'sat', 'act', 'ielts', 'ingilizce testi'],
  openGraph: {
    title: 'Branşlar',
    description: 'Türkiye Bilim Olimpiyatları Mezunları Topluluğu olarak üzerinde çalıştığımız bilim olimpiyatları branşları.',
    url: siteConfig.url,
    siteName: siteConfig.name + '/branslar',
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
      <div className="inline-block max-w-screen justify-center">
        {children}
      </div>
    </section>
  );
}
