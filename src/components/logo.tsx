import Image from "next/image";

export default function Logo() {
  return (
    <div className={"flex items-center gap-2"}>
      <Image src={"/tmdbflix_logo.png"} alt={"tmdbflix_logo logo"} width={100} height={50} />
    </div>
  );
}
