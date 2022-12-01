import Layout from "@uikit/layout/Layout";
import { useQuery } from "@tanstack/react-query";
import { Anime } from "src/types/anime";
import { getAnimeById } from "@utils/fetcher/getAnimeById";
import { animeDefaultValue } from "@utils/constant/animeDefaultValue";
import DetailInfo from "@animeDetail/AnimeDetail__DetailInfo";
import Recommendation from "@animeDetail/AnimeDetail__Recommendation";

type Props = {
  id: string;
};

type Data = {
  data: Anime;
};

function AnimeDetailScreen({ id }: Props) {
  const { data } = useQuery<Data>({
    queryKey: ["animeById"],
    queryFn: () => getAnimeById(id),
  });

  return (
    <Layout>
      <DetailInfo anime={data?.data ?? animeDefaultValue} />
      <Recommendation />
    </Layout>
  );
}

export default AnimeDetailScreen;
