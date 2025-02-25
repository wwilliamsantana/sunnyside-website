import Link from "next/link";
import Image from "next/image";

import iconInstagram from "../assets/icon-instagram.svg"
import iconFacebook from "../assets/icon-facebook.svg"
import iconPinterest from "../assets/icon-pinterest.svg"
import iconTwitter from "../assets/icon-twitter.svg"

export function Footer() {
  return <>
    <footer className="h-72 bg-teal-600/50 flex items-center justify-center flex-col font-[family-name:--font-barlow]">
      <strong className="font-[family-name:--font-barlow] text-3xl text-teal-900">sunnyside</strong>

      <nav className="mt-6">
        <ul className="flex gap-8 items-center text-sm text-teal-800 ">
          <li className="hover:text-white transition-colors">About</li>
          <li className="hover:text-white transition-colors">Services</li>
          <li className="hover:text-white transition-colors">Projects</li>
        </ul>
      </nav>
      <nav className="mt-12 group-icons">
        <ul className="flex gap-5 p-1">
          <Link href={""}>
            <Image src={iconFacebook} alt="Facebook" />
          </Link>
          <Link href={""}>
            <Image src={iconInstagram} alt="Instagram" />
          </Link>
          <Link href={""}>
            <Image src={iconTwitter} alt="Twitter" />
          </Link>
          <Link href={""}>
            <Image src={iconPinterest} alt="Pinterest" />
          </Link>
        </ul>
      </nav>
    </footer>
  </>
}