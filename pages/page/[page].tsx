import React from "react";
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
  await queryClient.prefetchQuery(["animes"], () => getAnimeList(1));
  const page = params?.page ?? "";

  return {
    props: {
      dehydrate: dehydrate(queryClient),
      page,
    },
  };
};
