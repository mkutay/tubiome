import { title } from "@/components/primitives";

export default function NotFound() {
  return (
    <section className="py-8 md:py-10 items-center flex flex-col">
      <h1 className={title()}>
        404
      </h1>
      <hr/>
      <p className="text-xl">
        Oh no! This page does not exist.
      </p>
    </section>
  );
}