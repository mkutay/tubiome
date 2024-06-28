import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: 'Topluluk',
  description: 'Türkiye Bilim Olimpiyatları Mezunları Topluluğu ve diğer olimpiyat toplulukları.',
  keywords: ['topluluk', 'bilim olimpiyatları'],
  openGraph: {
    title: 'Topluluk',
    description: 'Türkiye Bilim Olimpiyatları Mezunları Topluluğu ve diğer olimpiyat toplulukları.',
    url: siteConfig.url,
    siteName: siteConfig.name + '/topluluk',
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
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-2xl justify-center">
        {children}
      </div>
    </section>
  );
}
