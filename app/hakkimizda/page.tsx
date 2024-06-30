import { title } from "@/components/primitives";
import { Link } from "@nextui-org/link";
import {
  TwitterIcon,
  SearchIcon,
  Logo,
  InstagramIcon,
  FacebookIcon,
  LinkedinIcon,
  YoutubeIcon,
  ChevronDownIcon,
} from "@/components/icons";
import { siteConfig } from "@/config/site";

export default function Page() {
  return (
    <div className="prose dark:prose-invert">
      <h1 className={title()}>Hakkımızda</h1>
      <p>
        Biz bilime gönül vermiş; kimimiz okul sırasında, kimimiz atıldığı hayatta öğrenmeyi bırakmayan bir topluluğuz. TÜBiome olarak ulusal ve uluslararası olimpiyatlara katılan öğrencilerin kariyerlerinin ilerleyen dönemlerinde yaşıtlarıyla ve olimpiyata hazırlanan alt dönemleriyle iletişim halinde kalmasını amaçlıyoruz.
      </p>
      <p>
        Bu doğrultuda paneller ve online eğitim kampları aracılığıyla sizlere olimpiyatların ve yurtdışı sınavlarının içeriği hakkında detaylı bilgi sunmaya çalışıyoruz.
      </p>
      <p>
        Diğer bir yandan; geniş soru arşivimiz sayesinde Matematik (ortaokul ve lise), Bilgisayar (ortaokul ve lise), Fizik, Kimya, Biyoloji, Astrofizik, Coğrafya ve Felsefe dallarında çıkmış ve çıkabilecek sorulara kolay erişim sağlıyoruz.
      </p>
      <p>
        Bunun yanında site, [Mehmet Kutay Bozkurt](https://www.mkutay.dev) tarafından yapılmıştır.
      </p>
      <div className="hidden lg:flex gap-2 items-center justify-center">
        <Link isExternal aria-label="Twitter" href={siteConfig.links.twitter}>
          <TwitterIcon className="text-default-700" />
        </Link>
        <Link isExternal aria-label="Instagram" href={siteConfig.links.instagram}>
          <InstagramIcon className="text-default-700" />
        </Link>
        <Link isExternal aria-label="Facebook" href={siteConfig.links.facebook}>
          <FacebookIcon className="text-default-700" />
        </Link>
        <Link isExternal aria-label="Linkedin" href={siteConfig.links.linkedin}>
          <LinkedinIcon className="text-default-700" />
        </Link>
        <Link isExternal aria-label="Youtube" href={siteConfig.links.youtube}>
          <YoutubeIcon className="text-default-700" width={32} height={24}/>
        </Link>
      </div>
    </div>
  );
}
