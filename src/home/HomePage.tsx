import React from "react";
import { useRouter } from "next/router";
import Layout from "@uikit/layout/Layout";
import MovieList from "@home/MovieList";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAnimeList } from "@utils/fetcher/getAnimeList";
import { Anime } from "src/types/anime";
import { Pagination } from "src/types/pagination";
import { Pagination as PaginationComponent, Grid } from "@mui/material";

type Props = {
  page: string;
};

type Data = {
  data: Anime[];
  pagination: Pagination;
};

function HomePage({ page }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { data } = useQuery<Data>({
    queryKey: ["animes"],
    queryFn: () => getAnimeList(parseInt(page)),
    keepPreviousData: true,
    staleTime: 5000,
  });

  React.useEffect(() => {
    queryClient.fetchQuery({
      queryKey: ["animes"],
      queryFn: () => getAnimeList(parseInt(page)),
    });
  }, [page, queryClient]);

  // Prefetch the next page in the background!
  React.useEffect(() => {
    if (data?.pagination.has_next_page) {
      queryClient.prefetchQuery(["animes", page + 1], () =>
        getAnimeList(parseInt(page) + 1)
      );
    }
  }, [data, page, queryClient]);

  const handlePaginationChange = (page: number) => {
    router.push(`/page/${page}`);
  };

  return (
    <Layout>
      <MovieList animes={data?.data ?? []} />
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ my: 4 }}
      >
        <PaginationComponent
          showFirstButton
          showLastButton
          size="large"
          shape="rounded"
          color="primary"
          page={data?.pagination.current_page ?? 0}
          count={data?.pagination.last_visible_page ?? 0}
          onChange={(_, page) => handlePaginationChange(page)}
        />
      </Grid>
    </Layout>
  );
}

export default HomePage;
