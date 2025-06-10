"use client";
import Image from "next/image";
import { useState } from "react";
export default function Footer() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const allClass = "link hover:text-teal-400 no-underline";
  const icons = [
    {
      default: "/icon-facebook.svg",
      active: "/icon-facebook-active.svg",
      alt: "Facebook",
    },
    {
      default: "/icon-twitter.svg",
      active: "/icon-twitter-active.svg",
      alt: "Twitter",
    },
    {
      default: "/icon-pinterest.svg",
      active: "/icon-pinterest-active.svg",
      alt: "Pinterest",
    },
    {
      default: "/icon-instagram.svg",
      active: "/icon-instagram-active.svg",
      alt: "Instagram",
    },
  ];
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
        <a className={`${allClass}`}>Link Shortening</a>
        <a className={`${allClass}`}>Branded Links</a>
        <a className={`${allClass}`}>Analytics</a>
      </nav>
      <nav>
        <h6 className="footer-title text-white">Resources</h6>
        <a className={`${allClass}`}>Blog</a>
        <a className={`${allClass}`}>Developers</a>
        <a className={`${allClass}`}>Support</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className={`${allClass}`}>About</a>
        <a className={`${allClass}`}>Our Team</a>
        <a className={`${allClass}`}>Careers</a>
        <a className={`${allClass}`}>Contact</a>
      </nav>
      <nav className="flex gap-5">
        {icons.map((icon, idx) => (
          <Image
            key={icon.alt}
            src={hoveredIdx === idx ? icon.active : icon.default}
            alt={icon.alt}
            width={24}
            height={24}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredIdx(idx)}
            onMouseLeave={() => setHoveredIdx(null)}
          ></Image>
        ))}
      </nav>
    </footer>
  );
}
