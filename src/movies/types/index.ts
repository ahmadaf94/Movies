export type MovieListItem = {
  genre_ids: number[];
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
};

export type MoviesResponse = {
  page: number;
  results: MovieListItem[];
  total_pages: number;
  total_results: number;
};

export type Search = {
  start: Date;
  end: Date;
};
