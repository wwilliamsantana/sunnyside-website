import Image from "next/image"
import Link from "next/link";

import logo from "../assets/logo.svg"
import arrowDown from "../assets/icon-arrow-down.svg"
import imageGalleryOne from "../assets/image-gallery-milkbottles.jpg"
import imageGalleryTwo from "../assets/image-gallery-orange.jpg"
import imageGalleryThree from "../assets/image-gallery-cone.jpg"
import imageGalleryFor from "../assets/image-gallery-sugarcubes.jpg"
import iconInstagram from "../assets/icon-instagram.svg"
import iconFacebook from "../assets/icon-facebook.svg"
import iconPinterest from "../assets/icon-pinterest.svg"
import iconTwitter from "../assets/icon-twitter.svg"

import { Navigation } from "@/components/navigation";
import { Sections } from "@/components/sections";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <header className="bg-[url(../assets/image-header.jpg)] bg-cover bg-center  h-[620px]">
        <div className="p-8 flex justify-between content-center ">
          <Image src={logo} width={124} height={124} alt="Logotipo" />
          <Navigation />
        </div>
        <div className="flex flex-col items-center mt-10">
          <h1 className="font-[family-name:--font-fraunces] text-5xl uppercase tracking-widest text-white text-center">we are creatives</h1>
          <Image src={arrowDown} width={36} height={114} alt="Seta para baixo" className="mt-20" />
        </div>
      </header>

      <main>
        <Sections />
        <Testimonials />

        <div className="grid grid-cols-4 mt-28 h-80  max-md:grid-cols-2">
          <Image className="w-full h-full object-cover" src={imageGalleryOne} alt="" />
          <Image className="w-full h-full object-cover" src={imageGalleryTwo} alt="" />
          <Image className="w-full h-full object-cover" src={imageGalleryThree} alt="" />
          <Image className="w-full h-full object-cover" src={imageGalleryFor} alt="" />
        </div>
      </main>

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
  );
}

