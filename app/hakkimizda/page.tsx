import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="prose">
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
    </div>
  );
}
