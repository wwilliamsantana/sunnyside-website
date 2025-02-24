import Image from "next/image"
import logo from "../assets/logo.svg"
import arrowDown from "../assets/icon-arrow-down.svg"
import imageEgg from "../assets/image-transform.jpg"
import Link from "next/link";


export default function Home() {
  return (
    <>
      <header className="bg-[url(../assets/image-header.jpg)] bg-cover bg-center  h-[620px]">
        <div className="p-8 flex justify-between content-center ">
          <Image src={logo} width={124} height={124} alt="Logotipo" />
          <nav >
            <ul className="flex gap-8 content-center list-none font-[family-name:--font-barlow] items-center">
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>

              <li>
                <a href="">Projects</a>
              </li>

              <li className="uppercase px-3 py-1 text-sm bg-white rounded-full text-black hover:bg-white/50 hover:text-white transition-colors">
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
      <main>
        <section className="grid grid-cols-2 h-96">
          <div className="flex justify-center items-start flex-col mx-24 gap-6">
            <h2 className="font-[family-name:--font-fraunces] text-4xl">Transform your brand</h2>
            <p className="text-sm text-gray-500 font-[family-name:--font-barlow]" >We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the markenting for you.</p>
            <Link href={"#"} className="font-[family-name:--font-fraunces] uppercase text-xs underline decoration-yellow-400 ">learn more</Link>
          </div>
          <div className="h-full relative w-full bg-[#ffd302]">
            <Image src={imageEgg} alt="" fill className="object-contain" />
          </div>
        </section>



      </main>
    </>
  );
}

