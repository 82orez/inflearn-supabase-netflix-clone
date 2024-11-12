"use client";

import MovieCard from "@/components/movie-card";
import { useQuery } from "@tanstack/react-query";
import { getAllMovies } from "@/server-actions/actions";

export default function MovieCardList() {
  const { isPending, data, error } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getAllMovies(),
  });

  if (isPending) return <p>Loading...</p>;
  if (error) return <p>Error loading notes</p>;

  return (
    <div className={"border-2 border-gray-200 flex flex-wrap justify-center gap-1"}>
      {data?.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
}
