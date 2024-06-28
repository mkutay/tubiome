import { title } from "@/components/primitives";

export default function Page() {
  return (
    <div className="prose">
      <h1 className={title()}>Etkinlikler</h1>
      <p>
        Şu anda etkinliğimiz bulunmamaktadır. Daha sonrasında lütfen tekrar bakınız.
      </p>
    </div>
  );
}
