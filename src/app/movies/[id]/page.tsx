import MovieCardClient from "@/app/movies/[id]/movieCardClient";

export default function MovieDetailPage({ params }) {
  return <MovieCardClient id={params.id} />;
}
