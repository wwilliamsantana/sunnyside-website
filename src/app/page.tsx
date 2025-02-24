import Image from "next/image"
import Link from "next/link";

import logo from "../assets/logo.svg"
import arrowDown from "../assets/icon-arrow-down.svg"
import imageTransform from "../assets/image-transform.jpg"
import imageStandOut from "../assets/image-stand-out.jpg"
import imageGraphic from "../assets/image-graphic-design.jpg"
import imagePhotography from "../assets/image-photography.jpg"
import imageJennie from "../assets/image-jennie.jpg"
import imageThomas from "../assets/image-thomas.jpg"
import imageEmily from "../assets/image-emily.jpg"
import imageGalleryOne from "../assets/image-gallery-milkbottles.jpg"
import imageGalleryTwo from "../assets/image-gallery-orange.jpg"
import imageGalleryThree from "../assets/image-gallery-cone.jpg"
import imageGalleryFor from "../assets/image-gallery-sugarcubes.jpg"
import iconInstagram from "../assets/icon-instagram.svg"
import iconFacebook from "../assets/icon-facebook.svg"
import iconPinterest from "../assets/icon-pinterest.svg"
import iconTwitter from "../assets/icon-twitter.svg"





export default function Home() {
  return (
    <>
      <header className="bg-[url(../assets/image-header.jpg)] bg-cover bg-center  h-[620px]">
        <div className="p-8 flex justify-between content-center ">
          <Image src={logo} width={124} height={124} alt="Logotipo" />
          <nav >
            <ul className="flex gap-8 content-center list-none font-[family-name:--font-barlow] items-center text-white">
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
          <h1 className="font-[family-name:--font-fraunces] text-5xl uppercase tracking-widest text-white">we are creatives</h1>
          <Image src={arrowDown} width={36} height={114} alt="Seta para baixo" className="mt-20" />
        </div>
      </header>
      <main>
        <section className="grid grid-cols-2 h-[450px]">
          <div className="flex justify-center items-start flex-col mx-24 gap-6">
            <h2 className="font-[family-name:--font-fraunces] text-4xl">Transform your brand</h2>
            <p className="text-sm text-gray-500 font-[family-name:--font-barlow]" >We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the markenting for you.</p>
            <Link href={"#"} className="font-[family-name:--font-fraunces] uppercase text-xs underline decoration-yellow-400 ">learn more</Link>
          </div>
          <div className="h-full relative w-full bg-[#ffd302]">
            <Image src={imageTransform} alt="" fill className="object-contain" />
          </div>
        </section>

        <section className="grid grid-cols-2 h-[450px]">
          <div className="h-full relative w-full bg-[#ff7062] ">
            <Image src={imageStandOut} alt="" fill className="object-contain" />
          </div>
          <div className="flex justify-center items-start flex-col mx-24 gap-6">
            <h2 className="font-[family-name:--font-fraunces] text-4xl">Stand out to the right audience</h2>
            <p className="text-sm text-gray-500 font-[family-name:--font-barlow]" >
              {"Using a collaborative formula of designers, researchers, photographers, veiographers, and copywriters, we'll build and extend yout brand in digital places."}
            </p>
            <Link href={"#"} className="font-[family-name:--font-fraunces] uppercase text-xs underline decoration-red-500 ">learn more</Link>
          </div>

        </section>

        <section className="grid grid-cols-2 h-[450px]">
          <div className="h-full relative w-full bg-[#9cdcce] ">
            <Image src={imageGraphic} alt="" fill className="object-contain" />

            <div className="absolute text-center bottom-12 font-[family-name:--font-fraunces] text-teal-900 ">
              <h2 className="text-2xl">Graphic Design</h2>
              <p className="px-44 mt-3 text-sm">{"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."}</p>
            </div>

          </div>
          <div className="h-full relative w-full bg-[#62c7ff] ">
            <Image src={imagePhotography} alt="" fill className="object-contain" />

            <div className="absolute text-center bottom-12 font-[family-name:--font-fraunces] text-sky-900 ">
              <h2 className="text-2xl">Photography</h2>
              <p className="px-44 mt-3 text-sm">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
            </div>
          </div>
        </section>

        <article className="mt-28">
          <h3 className="text-center text-xl text-gray-400 font-bold uppercase tracking-[0.35rem] font-[family-name:--font-barlow]">Client testimonials</h3>

          <div className="flex gap-12 justify-center items-center mt-16">

            <div className="w-1/5 flex flex-col items-center justify-center gap-7">
              <Image src={imageEmily} width={80} height={80} alt="user" className="rounded-full" />

              <p className="text-center text-sm font-[family-name:--font-barlow] text-gray-600">We put ourtrust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

              <div className="flex flex-col items-center">
                <strong className="font-[family-name:--font-fraunces]">Emily R.</strong>
                <span className="font-[family-name:--font-barlow] text-sm text-gray-300 ">Marketing Director</span>
              </div>
            </div>

            <div className="w-1/5 flex flex-col items-center justify-center gap-7">
              <Image src={imageThomas} width={80} height={80} alt="user" className="rounded-full" />

              <p className="text-center text-sm font-[family-name:--font-barlow] text-gray-600">{"Sunnyside's enthusiasm coupled their keen interest in our brand's success made it a satisfying and enjoyable experience."}</p>

              <div className="flex flex-col items-center">
                <strong className="font-[family-name:--font-fraunces]">Thomas S.</strong>
                <span className="font-[family-name:--font-barlow] text-sm text-gray-300 ">Chief Operating Officer</span>
              </div>
            </div>

            <div className="w-1/5 flex flex-col items-center justify-center gap-7">
              <Image src={imageJennie} width={80} height={80} alt="user" className="rounded-full" />

              <p className="text-center text-sm font-[family-name:--font-barlow] text-gray-600">Incredible end result! Our sales increased over 400% when we worked with Sunnyside highly recommended!</p>

              <div className="flex flex-col items-center">
                <strong className="font-[family-name:--font-fraunces]">Jennie F.</strong>
                <span className="font-[family-name:--font-barlow] text-sm text-gray-300 ">Business Owner</span>
              </div>
            </div>


          </div>
        </article>

      </main>
      <figure className="grid grid-cols-4 mt-28 h-80  ">
        <Image className="w-full h-full object-cover" src={imageGalleryOne} alt="" />
        <Image className="w-full h-full object-cover" src={imageGalleryTwo} alt="" />
        <Image className="w-full h-full object-cover" src={imageGalleryThree} alt="" />
        <Image className="w-full h-full object-cover" src={imageGalleryFor} alt="" />
      </figure>

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

