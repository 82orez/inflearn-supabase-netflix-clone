import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className={"fixed top-0 left-0 right-0 z-50 border-2 flex items-center gap-4 p-2 pr-5 bg-gray-700 text-white"}>
      <Logo />

      <nav className={"grow text-lg"}>
        <ul className={"flex gap-4"}>
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>

      <div className={""}>
        <input type="text" className={"border-2 w-80 p-1 rounded-md text-black"} placeholder={"Search Movies"} />
      </div>
    </header>
  );
}
