import { Navigation } from "./navigation";
import Image from "next/image";

import logo from "../assets/logo.svg"
import arrowDown from "../assets/icon-arrow-down.svg"
import Link from "next/link";

export function Header() {
  return <>
    <header className="bg-[url(../assets/image-header.jpg)] bg-cover bg-center  h-[620px]">
      <div className="p-8 flex justify-between content-center ">
        <Link href="/">
          <Image src={logo} width={124} height={124} alt="Logotipo" />
        </Link>
        <Navigation />
      </div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="font-[family-name:--font-fraunces] text-5xl uppercase tracking-widest text-white text-center">we are creatives</h1>
        <Image src={arrowDown} width={36} height={114} alt="Seta para baixo" className="mt-20" />
      </div>
    </header>
  </>
}