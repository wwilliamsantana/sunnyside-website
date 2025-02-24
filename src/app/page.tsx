import Image from "next/image"
import logo from "../assets/logo.svg"
import arrowDown from "../assets/icon-arrow-down.svg"


export default function Home() {
  return (
    <header className="bg-[url(../assets/image-header.jpg)] bg-cover bg-center  h-[620px]">
      <div className="p-8 flex justify-between content-center ">
        <Image src={logo} width={124} height={124} alt="Logotipo" />
        <nav >
          <ul className="flex gap-8 content-center list-none font-[family-name:--font-barlow]">
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>

            <li>
              <a href="">Projects</a>
            </li>

            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col items-center mt-10">
        <h1 className="font-[family-name:--font-fraunces] text-5xl uppercase tracking-widest">we are creatives</h1>
        <Image src={arrowDown} width={36} height={114} alt="Seta para baixo" className="mt-20" />
      </div>
    </header>
  );
}

