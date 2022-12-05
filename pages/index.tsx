import HomeScreen, { HomeScreenProps } from "@home/HomeScreen";
import { MainProps } from "./_app";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getAnimeList } from "@utils/fetcher/getAnimeList";
import { GetServerSideProps } from "next";

type Props = MainProps & HomeScreenProps;

export default function Page({ page = 1 }) {
  return <HomeScreen page={page} />;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["animes", 1], () => getAnimeList(1));

  return {
    props: {
      page: 1,
      dehydratedState: dehydrate(queryClient),
    },
  };
};
