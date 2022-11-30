import HomeScreen from "@home/HomeScreen";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getAnimeList } from "@utils/fetcher/getAnimeList";

export default function Page({ page = "1" }) {
  return <HomeScreen page={page} />;
}

export async function getServerSideProps(): Promise<{
  props: {};
}> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["animes"], () => getAnimeList(1));

  return {
    props: {
      dehydrate: dehydrate(queryClient),
    },
  };
}
