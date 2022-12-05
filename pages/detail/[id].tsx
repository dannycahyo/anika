import AnimeDetailScreen, {
  Props as AnimeDetailScreenProps,
} from "@animeDetail/AnimeDetailScreen";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getAnimeById } from "@utils/fetcher/getAnimeById";
import { MainProps } from "pages/_app";
import { GetServerSideProps } from "next";

type Props = MainProps & AnimeDetailScreenProps;

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
  await queryClient.prefetchQuery(["animeById", id], () => getAnimeById(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      id,
    },
  };
};
