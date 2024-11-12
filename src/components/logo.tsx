import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <div className={"flex items-center gap-2"}>
      <Link href="/">
        <Image src={"/tmdbflix_logo.png"} alt={"tmdbflix_logo logo"} width={100} height={50} />
      </Link>
    </div>
  );
}
