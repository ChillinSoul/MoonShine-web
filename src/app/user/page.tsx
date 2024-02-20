import { options } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import UserCard from "../cmp/UserCard";
import PageTitleWrapper from "../cmp/PageTitleWrapper";
export default async function ServerPage() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <PageTitleWrapper title="Profile">
      <UserCard user={session?.user} pagetype={"Server"} />
    </PageTitleWrapper>
  );
}
