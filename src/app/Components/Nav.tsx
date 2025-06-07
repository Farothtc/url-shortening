import Image from "next/image";
export default function Nav() {
  return (
    <nav className="container mx-auto pt-10 text-gray-400 flex justify-between items-center">
      <div className="flex py-2 justify-start items-center">
        <Image src={"/logo.svg"} alt="logo" width={121} height={33}></Image>
        <div className="flex gap-3 ps-5">
          <button className="btn btn-ghost">Features</button>
          <button className="btn btn-ghost">Pricing</button>
          <button className="btn btn-ghost">Resources</button>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="btn btn-ghost">Login</button>
        <button className="btn btn-ghost rounded-4xl bg-teal-400 text-white hover:border-teal-700">
          Sign Up
        </button>
      </div>
    </nav>
  );
}
