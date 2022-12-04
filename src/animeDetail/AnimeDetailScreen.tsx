import React from "react";
import Layout from "@uikit/layout/Layout";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Anime } from "src/types/anime";
import { getAnimeById } from "@utils/fetcher/getAnimeById";
import { animeDefaultValue } from "@utils/constant/animeDefaultValue";
import DetailInfo from "@animeDetail/AnimeDetail__DetailInfo";
import FavouriteList from "@animeDetail/AnimeDetail__FavouriteList";
import Recommendation from "@animeDetail/AnimeDetail__Recommendation";
import GeneralError from "@uikit/error/GeneralError";

type Props = {
  id: string;
};

type Data = {
  data: Anime;
};

namespace Caption {
  export const errorTitle = "Upps!, Error!";
  export const errorDesc =
    "There is something wrong when getting anime detail info";
}

function AnimeDetailScreen({ id }: Props) {
  const { data, isError } = useQuery<Data>({
    queryKey: ["animeById"],
    queryFn: () => getAnimeById(id),
  });

  const queryClient = useQueryClient();

  React.useEffect(() => {
    queryClient.fetchQuery({
      queryKey: ["animeById"],
      queryFn: () => getAnimeById(id),
    });
  }, [id, queryClient]);

  return (
    <Layout>
      {isError ? (
        <GeneralError
          errorTitle={Caption.errorTitle}
          errorDescription={Caption.errorDesc}
        />
      ) : (
        <DetailInfo id={id} />
      )}
      <Recommendation />
      <FavouriteList anime={data?.data ?? animeDefaultValue} />
    </Layout>
  );
}

export default AnimeDetailScreen;
