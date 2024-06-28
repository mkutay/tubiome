import { title } from "@/components/primitives";
import Link from "next/link";

export default function Page() {
  return (
    <div className="prose">
      <h1 className={title()}>Topluluk</h1>
      <p>Birçok bilim olimpiyatı dalları kendi aralarında gruplaşmışlardır. Bunlar arasında herkese açık olan topluluk yerleri aşağıda belirtilmiştir.</p>
      <ul>
        <li>
          <Link
            href="https://discord.gg/Cd3Gfj7WJD"
          >
            Bu Bir Kamp Grubuydu Ğ WhatsApp Grubu
          </Link>
        </li>
        <li>
          <Link
            href="https://discord.gg/Cd3Gfj7WJD"
          >
            Yüz Yüze Kamplar Discord Sunucusu
          </Link>
        </li>
        <li>
          <Link
            href="https://discord.gg/6DeC5JGSRD"
          >
            Bilgisayar Olimpiyatı Discord Sunucusu (Codeforces Hesabı Gerekmektedir)
          </Link>
        </li>
        <li>
          <Link
            href="https://discord.gg/PU5BnX7sad"
          >
            Bilim Olimpiyatları Discord Sunucusu
          </Link>
        </li>
      </ul>
    </div>
  );
}
