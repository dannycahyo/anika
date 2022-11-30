import FavouriteScreen from "@favourite/FavouriteScreen";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getFavouriteAnimeList } from "@utils/fetcher/getFavouriteAnimeList";
import { Constant } from "@favourite/FavouriteScreen";

export default function Page() {
  return <FavouriteScreen />;
}

export async function getServerSideProps(): Promise<{
  props: {};
}> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["animes"], () =>
    getFavouriteAnimeList(Constant.animeLimit)
  );

  return {
    props: {
      dehydrate: dehydrate(queryClient),
    },
  };
}
