import Link from 'next/link';
import SearchSvg from '@/app/ui/svg/searchSvg';
import TubiomeSvg from './svg/tubiomeSvg';

export default function NavBar() {
  return (
    <nav className="py-12 px-12 place-content-center flex">
      <div className="flex-none">
        <Link href="/" className="flex flex-row">
          <TubiomeSvg width={32} height={32} viewBox="-4 -4 32 32"/>
          <p className="text-2xl hover:underline font-extrabold">
            TÜBİOME
          </p>
        </Link>
      </div>
      <ul className="flex-grow flex justify-evenly place-content-center font-semibold">
        <li>Branşlar</li>
        <li>Yurtdışı Eğitim</li>
        <li>Topluluk</li>
        <li>Etkinlikler</li>
      </ul>
      <div className="flex-none">
        <SearchSvg width={32} height={32} viewBox="0 0 48 48"/>
      </div>
    </nav>
  );
}