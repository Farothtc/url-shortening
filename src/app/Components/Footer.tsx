import Image from "next/image";
export default function Footer() {
  return (
    <footer className="footer container mx-auto sm:footer-horizontal bg-[#232027] p-10">
      <aside>
        <Image
          src={"/logo-white.svg"}
          alt="logo"
          width={121}
          height={33}
        ></Image>
      </aside>
      <nav>
        <h6 className="footer-title text-white">Features</h6>
        <a className="link link-hover">Link Shortening</a>
        <a className="link link-hover">Branded Links</a>
        <a className="link link-hover">Analytics</a>
      </nav>
      <nav>
        <h6 className="footer-title text-white">Resources</h6>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Developers</a>
        <a className="link link-hover">Support</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About</a>
        <a className="link link-hover">Our Team</a>
        <a className="link link-hover">Careers</a>
        <a className="link link-hover">Contact</a>
      </nav>
      <nav className="flex gap-5">
        <Image
          src={"/icon-facebook.svg"}
          alt="icon"
          width={24}
          height={24}
          className="cursor-pointer"
        ></Image>
        <Image
          src={"/icon-twitter.svg"}
          alt="icon"
          width={24}
          height={24}
          className="cursor-pointer"
        ></Image>
        <Image
          src={"/icon-pinterest.svg"}
          alt="icon"
          width={24}
          height={24}
          className="cursor-pointer"
        ></Image>
        <Image
          src={"/icon-instagram.svg"}
          alt="icon"
          width={24}
          height={24}
          className="cursor-pointer"
        ></Image>
      </nav>
    </footer>
  );
}
