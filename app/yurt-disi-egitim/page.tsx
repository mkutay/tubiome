import { title } from "@/components/primitives";

export default function Page() {
  return (
    <div className="prose">
      <h1 className={title()}>Yurt Dışı Eğitim</h1>
      <p>
        Bu sayfada yurt dışında eğitim alma konusunda birçok içerik bulunmaktadır. Aramızdan birçoğumuz
        Amerika, İngiltere ve benzeri diğer ülkelerde eğitim almaktadır.
      </p>
      <ul>
        <li>
          SAT
        </li>
        <li>
          ACT
        </li>
        <li>
          IELTS
        </li>
        <li>
          TOEFL
        </li>
        <li>
          Cambridge TMUA
        </li>
        <li>
          Oxford MAT
        </li>
      </ul>
    </div>
  );
}
