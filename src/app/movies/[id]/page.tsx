import MovieCardClient from "@/app/movies/[id]/movieCardClient";
import { getMovie, prismaGetMovie } from "@/server-actions/actions";

export async function generateMetadata({ params }) {
  const movie = await getMovie(params.id);

  return {
    title: movie.title,
    description: movie.overview,
    openGraph: { images: [movie.image_url] },
  };
}

export default async function MovieDetailPage({ params }) {
  const movie = await prismaGetMovie(params.id);
  return <MovieCardClient movie={movie} />;
}
