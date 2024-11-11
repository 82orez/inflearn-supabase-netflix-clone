import MovieCard from "@/components/movie-card";

export default function MovieCardList() {
  return (
    <div className={"border-2 border-gray-200 flex flex-wrap justify-center gap-1"}>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </div>
  );
}
