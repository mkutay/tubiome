export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "TÜBİOME | Türkiye Bilim Olimpiyatları Mezunları Topluluğu",
  description: "Biz bilime gönül vermiş; kimimiz okul sırasında, kimimiz atıldığı hayatta öğrenmeyi bırakmayan bir topluluğuz.",
  navItems: [
    {
      label: "Branşlar",
      href: "/branslar",
      dropdownItems: [
        {
          label: "Fizik",
          href: "/branslar/fizik",
        },
        {
          label: "Kimya",
          href: "/branslar/kimya",
        },
        {
          label: "Biyoloji",
          href: "/branslar/biyoloji",
        },
        {
          label: "Matematik",
          href: "/branslar/matematik",
        },
        {
          label: "Bilgisayar",
          href: "/branslar/bilgisayar",
        },
        {
          label: "Astrofizik",
          href: "/branslar/astrofizik",
        },
        {
          label: "Coğrafya",
          href: "/branslar/cografya",
        },
        {
          label: "Felsefe",
          href: "/branslar/felsefe",
        },
        {
          label: "Ekonomi",
          href: "/branslar/ekonomi",
        },
        {
          label: "Linguistik",
          href: "/branslar/linguistik",
        },
      ],
    },
    {
      label: "Yurtdışı Eğitim",
      href: "/yurtdisi-egitim",
    },
    {
      label: "Topluluk",
      href: "/topluluk",
    },
    {
      label: "Etkinlikler",
      href: "/etkinlikler",
    },
    {
      label: "Hakkımızda",
      href: "/hakkimizda",
    },
  ],
  navMenuItems: [
    {
      label: "Ana Sayfa",
      href: "/",
    },
    {
      label: "Branşlar",
      href: "/branslar",
    },
    {
      label: "Yurtdışı Eğitim",
      href: "/yurtdisi-egitim",
    },
    {
      label: "Topluluk",
      href: "/topluluk",
    },
    {
      label: "Etkinlikler",
      href: "/etkinlikler",
    },
    {
      label: "Hakkımızda",
      href: "/hakkimizda",
    },
  ],
  links: {
    twitter: "http://www.x.com/tubiome",
    facebook: "https://www.facebook.com/profile.php?id=61560938087877",
    youtube: "https://www.youtube.com/@tubiome",
    instagram: "https://www.instagram.com/turkiyebiome/",
    linkedin: "http://www.linkedin.com/company/t%C3%BCbiome/",
  },
};
