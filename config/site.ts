export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  url: 'https://tubiome.vercel.app/',
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
          biome: "grove",
        },
        {
          label: "Kimya",
          href: "/branslar/kimya",
          biome: "dripstone",
        },
        {
          label: "Biyoloji",
          href: "/branslar/biyoloji",
          biome: "birch",
        },
        {
          label: "Matematik",
          href: "/branslar/matematik",
          biome: "badlands",
        },
        {
          label: "Bilgisayar",
          href: "/branslar/bilgisayar",
          biome: "cherry",
        },
        {
          label: "Astrofizik",
          href: "/branslar/astrofizik",
          biome: "jungle",
        },
        {
          label: "Coğrafya",
          href: "/branslar/cografya",
          biome: "taiga",
        },
        {
          label: "Felsefe",
          href: "/branslar/felsefe",
          biome: "basalt"
        },
        {
          label: "Ekonomi",
          href: "/branslar/ekonomi",
          biome: "savannah",
        },
        {
          label: "Linguistik",
          href: "/branslar/linguistik",
          biome: "desert",
        },
      ],
    },
    {
      label: "Yurt Dışı Eğitim",
      href: "/yurt-disi-egitim",
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
      label: "Yurt Dışı Eğitim",
      href: "/yurt-disi-egitim",
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
