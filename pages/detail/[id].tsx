import AnimeDetailScreen from "@animeDetail/AnimeDetailScreen";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getAnimeById } from "@utils/fetcher/getAnimeById";
import { GetServerSideProps } from "next";

type Props = {
  id: string;
};

type Params = {
  id: string;
};

export default function Page({ id }: Props) {
  return <AnimeDetailScreen id={id} />;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const queryClient = new QueryClient();
  const id = params?.id ?? "";
  await queryClient.prefetchQuery(["animeById"], () => getAnimeById(id));

  return {
    props: {
      dehydrate: dehydrate(queryClient),
      id,
    },
  };
};
