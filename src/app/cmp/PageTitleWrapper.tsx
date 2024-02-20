export default function TitlePageWrapper({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="flex h-full min-h-screen flex-col items-center justify-between overflow-hidden p-24">
      <div
        className="  after:bg-gradient-conic relative z-[-1] flex-col place-items-center
        before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full
        before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute
        after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200
        after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]
        before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700
        after:dark:from-sky-900 after:dark:via-[#0141ff] "
      >
        <h1 className="text-5xl text-purple-500">{title}</h1>
        {children}
      </div>
    </main>
  );
}
