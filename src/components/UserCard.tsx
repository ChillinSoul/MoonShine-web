type User =
  | {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    }
  | undefined;

type Props = {
  user: User;
  pagetype: string;
};

export default function Card({ user, pagetype }: Props) {
  

  const greeting = user?.name ? (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 text-5xl font-bold text-black">
      Hello {user?.name}!
    </div>
  ) : null;

  const emailDisplay = user?.email ? (
    <div className="flex flex-col items-center rounded-lg bg-white p-6 text-5xl font-bold text-black">
      {user?.email}
    </div>
  ) : null;

  

  return (
    <section className="flex flex-col gap-4">
      {greeting}
      {emailDisplay}
      <p className="text-center text-2xl">{pagetype} Page!</p>
    </section>
  );
}
