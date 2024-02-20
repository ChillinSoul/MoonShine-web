"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function Login() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: true,
      username: credentials.username,
      password: credentials.password,
      callbackUrl: "/",
    });

    if (result?.error) {
      console.error(result.error);
    } else {
      window.location.href = result?.url as string;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-300 relative flex place-items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 rounded border-2 border-purple-500 p-10"
        >
          <button
            onClick={() => signIn("github")}
            className="mt-4 w-full rounded bg-black px-4 py-2 text-white hover:bg-gray-700"
          >
            Log in with GitHub
          </button>
          <p className="text-purple-500">- or -</p>

          <input
            name="username"
            type="text"
            placeholder="Username"
            className="rounded p-2"
            value={credentials.username}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="rounded p-2"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="mt-4 w-full rounded bg-black px-4 py-2 text-white hover:bg-gray-700"
          >
            Log In
          </button>
        </form>
      </div>
    </main>
  );
}
