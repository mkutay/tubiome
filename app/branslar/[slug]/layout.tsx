export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-2xl justify-center">
        {children}
      </div>
    </section>
  );
}
