import HomeScreen from "@home/HomeScreen";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getAnimeList } from "@utils/fetcher/getAnimeList";
import { GetServerSideProps } from "next";

type Props = {
  page: string;
};

type Params = {
  page: string;
};

export default function Page({ page }: Props) {
  return <HomeScreen page={page} />;
}

export const getServerSideProps: GetServerSideProps<Props, Params> = async ({
  params,
}) => {
  const queryClient = new QueryClient();
  const page = params?.page ?? "";
  await queryClient.prefetchQuery(["animes"], () =>
    getAnimeList(parseInt(page))
  );

  return {
    props: {
      dehydrate: dehydrate(queryClient),
      page,
    },
  };
};
