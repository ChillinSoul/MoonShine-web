import { options } from "../api/auth/[...nextAuth]";
import { getServerSession } from "next-auth/next";
import UserCard from "../cmp/UserCard";

export default async function Profile() {
  const session = await getServerSession(options);
  return (

  );
}
