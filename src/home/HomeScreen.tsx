import React from "react";
import { useRouter } from "next/router";
import Layout from "@uikit/layout/Layout";
import AnimeListLoading from "@uikit/loading/AnimeListLoading";
import GeneralErrorModal from "@uikit/error/GeneralErrorModal";
import AnimeList from "@home/Home__AnimeList";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAnimeList } from "@utils/fetcher/getAnimeList";
import { Anime } from "src/types/anime";
import { Pagination } from "src/types/pagination";
import { renderIfTrue } from "@utils/common/rendering";
import {
  Pagination as PaginationComponent,
  Grid,
  useMediaQuery,
} from "@mui/material";

export type HomeScreenProps = {
  page: number;
};

type Data = {
  data: Anime[];
  pagination: Pagination;
};

function HomePage({ page }: HomeScreenProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const isMobileSize = useMediaQuery("(max-width:460px)");

  const { data, isLoading, isError } = useQuery<Data>({
    queryKey: ["animes", page],
    queryFn: () => getAnimeList(page),
    keepPreviousData: true,
    staleTime: 5000,
  });

  // Prefetch the next page in the background!
  React.useEffect(() => {
    if (data?.pagination.has_next_page) {
      queryClient.prefetchQuery(["animes", page + 1], () =>
        getAnimeList(page + 1)
      );
    }
  }, [data, page, queryClient]);

  const handlePaginationChange = (page: number) => {
    router.push(`/page/${page}`);
  };

  return (
    <Layout>
      <AnimeList animes={data?.data ?? []} />
      {renderIfTrue(isLoading, <AnimeListLoading />)}
      {renderIfTrue(isError, <GeneralErrorModal condition={isError} />)}
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
          size={isMobileSize ? "small" : "large"}
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
