import PageTitleWrapper from "./cmp/PageTitleWrapper";
import CardBlock from "./cmp/CardBlock";
import CardList from "./CardList";

export default async function Home() {
  return (
    <PageTitleWrapper title="Home">
      <h2>Welcome to Moonshine </h2>
      <a href="/api/auth/signin" className="cursor-pointer">
        <p>
          Please <span className="text-purple-500">sign in </span> to continue
        </p>
      </a>
      <CardBlock cards={CardList} />
    </PageTitleWrapper>
  );
}
