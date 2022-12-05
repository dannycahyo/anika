import HomeScreen, { HomeScreenProps } from "@home/HomeScreen";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getAnimeList } from "@utils/fetcher/getAnimeList";
import { GetServerSideProps } from "next";
import { MainProps } from "pages/_app";

type Props = MainProps & HomeScreenProps;

type Params = {
  page: string;
};

export default HomeScreen;

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const queryClient = new QueryClient();
  const page = parseInt(params?.page ?? "1");
  await queryClient.prefetchQuery(["animes", page], () => getAnimeList(page));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      page,
    },
  };
};
