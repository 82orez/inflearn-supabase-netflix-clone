import Image from "next/image";
import Link from "next/link";

export default function MovieCard() {
  return (
    <div className={"relative border-2"}>
      <Link href="/1">
        <Image src="https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg" alt="" width={"400"} height={"800"} />
        <div
          className={
            "absolute top-0 bottom-0 left-0 right-0 bg-black text-white opacity-0 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center"
          }>
          <div>title</div>
        </div>
      </Link>
    </div>
  );
}
