import Layout from "@uikit/layout/Layout";
import AnimeList from "@favourite/Favourite__AnimeList";
import { useQuery } from "@tanstack/react-query";
import { Anime } from "src/types/anime";
import { getFavouriteAnimeList } from "@utils/fetcher/getFavouriteAnimeList";

export namespace Constant {
  export const animeLimit = 16;
}

type Data = {
  data: Anime[];
};

function FavouriteScreen() {
  const { data } = useQuery<Data>({
    queryKey: ["favouriteAnimes"],
    queryFn: () => getFavouriteAnimeList(Constant.animeLimit),
  });

  return (
    <Layout>
      <AnimeList animes={data?.data ?? []} />
    </Layout>
  );
}

export default FavouriteScreen;
