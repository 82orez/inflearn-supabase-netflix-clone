import MovieCardClient from "@/app/movies/[id]/movieCardClient";
import { getMovie, prismaGetMovie } from "@/server-actions/actions";

export default async function MovieDetailPage({ params }) {
  const movie = await prismaGetMovie(params.id);
  return <MovieCardClient movie={movie} />;
}
