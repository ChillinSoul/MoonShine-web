import { options } from "./api/auth/[...nextAuth]";
import { getServerSession } from "next-auth/next";

export default async function Home() {
  const session = await getServerSession(options);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" before:bg-gradient-radial after:bg-gradient-conic relative z-[-1] flex flex-col place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40">
        <h1 className="text-5xl text-purple-500">Moonshine</h1>
        {session?.user ? (
          <h2>Dashboard</h2>
        ) : (
          <>
            <h2>Welcome to Moonshine </h2>
            <a href="/api/auth/signin" className="cursor-pointer">
              <p>
                Please <span className="text-purple-500">sign in </span> to
                continue
              </p>
            </a>
          </>
        )}
      </div>
    </main>
  );
}
