import React from "react";
import HomePage from "@home/HomePage";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { getAnimeList } from "@utils/fetcher/getAnimeList";

export default function Page({ page = "1" }) {
  return <HomePage page={page} />;
}

export async function getServerSideProps(): Promise<{
  props: {};
}> {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["animes"], () => getAnimeList(1));

  return {
    props: {
      dehydrate: dehydrate(queryClient),
    },
  };
}
