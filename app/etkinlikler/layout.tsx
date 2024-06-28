import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: 'Etkinlikler',
  description: 'Türkiye Bilim Olimpiyatları Mezunları Topluluğu\'nun gerçekleştirdiği etkinlikler.',
  keywords: ['yurt dışı', 'eğitim', 'sat', 'act', 'ielts', 'ingilizce testi'],
  openGraph: {
    title: 'Etkinlikler',
    description: 'Türkiye Bilim Olimpiyatları Mezunları Topluluğu\'nun gerçekleştirdiği etkinlikler.',
    url: siteConfig.url,
    siteName: siteConfig.name + '/etkinlikler',
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
