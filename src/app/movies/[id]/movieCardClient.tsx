import Image from "next/image";

export default function MovieCardClient({ id }) {
  return (
    <main className={"mt-16 flex gap-12 p-4 bg-blue-50"}>
      <Image src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" alt="" width={"400"} height={"800"} className={"w-1/3"} />
      <div className={"w-2/3"}>
        <h1 className={"text-2xl font-bold"}>title</h1>
        <p>desc</p>
        <div>vote_average</div>
        <div>Popularity</div>
        <div>Release_date</div>
      </div>
    </main>
  );
}
