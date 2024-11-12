import MovieCardClient from "@/app/movies/[id]/movieCardClient";
import { getMovie } from "@/server-actions/actions";

export default async function MovieDetailPage({ params }) {
  const movie = await getMovie(params.id);
  return <MovieCardClient movie={movie} />;
}
