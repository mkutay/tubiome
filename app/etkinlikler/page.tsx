import { title } from "@/components/primitives";

export default function Page() {
  return (
    <div className="prose dark:prose-invert">
      <h1 className={title()}>Etkinlikler</h1>
      <p>
        Şu anda etkinliğimiz bulunmamaktadır. Daha sonrasında lütfen tekrar bakınız.
      </p>
    </div>
  );
}
