import Link from "next/link";

export default function Footer() {
  return (
    <footer className={"fixed bottom-0 left-0 right-0 p-4 bg-gray-900 text-white"}>
      <div>Footer</div>
      <p>
        Movie Database from {"  "}
        <Link href={"https://www.themoviedb.org/"} target={"_blank"} className={"underline"}>
          TMDB!
        </Link>
      </p>
    </footer>
  );
}
