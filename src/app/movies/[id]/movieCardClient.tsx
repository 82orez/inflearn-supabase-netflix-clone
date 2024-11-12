import Image from "next/image";

export default function MovieCardClient({ movie }) {
  return (
    <main className={"mt-16 flex gap-12 p-4 bg-blue-50"}>
      <Image src={movie.image_url} alt="" width={"400"} height={"800"} className={"w-1/3"} />
      <div className={"w-2/3"}>
        <h1 className={"text-2xl font-bold"}>{movie.title}</h1>
        <p>{movie.overview}</p>
        <div>{movie.vote_average}</div>
        <div>{movie.popularity}</div>
        <div>{movie.release_date}</div>
      </div>
    </main>
  );
}
