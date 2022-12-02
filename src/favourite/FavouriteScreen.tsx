import Layout from "@uikit/layout/Layout";
import AnimeList from "@favourite/Favourite__AnimeList";
import AnimeListLoading from "@uikit/loading/AnimeListLoading";
import { useQuery } from "@tanstack/react-query";
import { Anime } from "src/types/anime";
import { getFavouriteAnimeList } from "@utils/fetcher/getFavouriteAnimeList";
import { renderIfTrue } from "@utils/common/rendering";
import GeneralErrorModal from "@uikit/error/GeneralErrorModal";

export namespace Constant {
  export const animeLimit = 16;
}

type Data = {
  data: Anime[];
};

function FavouriteScreen() {
  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: ["favouriteAnimes"],
    queryFn: () => getFavouriteAnimeList(Constant.animeLimit),
  });

  return (
    <Layout>
      <AnimeList animes={data?.data ?? []} />
      {renderIfTrue(isLoading, <AnimeListLoading />)}
      {renderIfTrue(isError, <GeneralErrorModal condition={isError} />)}
    </Layout>
  );
}

export default FavouriteScreen;
