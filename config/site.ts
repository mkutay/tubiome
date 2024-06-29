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
          color: "bg-[#A6A8A7] dark:bg-[#494B4A]",
        },
        {
          label: "Kimya",
          href: "/branslar/kimya",
          biome: "dripstone",
          color: "bg-[#DC8616] dark:bg-[#4D1803]",
        },
        {
          label: "Biyoloji",
          href: "/branslar/biyoloji",
          biome: "birch",
          color: "bg-[#CAB59D] dark:bg-[#5B4539]",
        },
        {
          label: "Matematik",
          href: "/branslar/matematik",
          biome: "badlands",
          color: "bg-[#D1976E] dark:bg-[#785A3F]",
        },
        {
          label: "Bilgisayar",
          href: "/branslar/bilgisayar",
          biome: "cherry",
          color: "bg-[#BDA1A7] dark:bg-[#84636B]",
        },
        {
          label: "Astrofizik",
          href: "/branslar/astrofizik",
          biome: "jungle",
          color: "bg-[#5E8275] dark:bg-[#072C2A]",
        },
        {
          label: "Coğrafya",
          href: "/branslar/cografya",
          biome: "taiga",
          color: "bg-[#7A7D58] dark:bg-[#464B34]",
        },
        {
          label: "Felsefe",
          href: "/branslar/felsefe",
          biome: "basalt",
          color: "bg-[#89877A] dark:bg-[#494A43]",
        },
        {
          label: "Ekonomi",
          href: "/branslar/ekonomi",
          biome: "savannah",
          color: "bg-[#737557] dark:bg-[#353C26]",
        },
        {
          label: "Linguistik",
          href: "/branslar/linguistik",
          biome: "desert",
          color: "bg-[#987257] dark:bg-[#3D2F27]",
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
