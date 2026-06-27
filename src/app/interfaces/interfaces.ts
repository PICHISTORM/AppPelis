export interface RespuestaMDB {
  page: number;
  results: Peliculas[];
  total_pages: number;
  total_results: number;
}

export interface Peliculas {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  softcore: boolean;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
