import Link from "next/link";
import Image from "next/image";
import imageTransform from "../assets/image-transform.jpg"
import imageStandOut from "../assets/image-stand-out.jpg"
import imageGraphic from "../assets/image-graphic-design.jpg"
import imagePhotography from "../assets/image-photography.jpg"

export function Sections() {
  return <>
    <section className="grid grid-cols-2 h-[29rem] max-md:grid-cols-1 ">
      <div className="flex justify-center items-start flex-col mx-16 gap-6 max-md:order-2 ">
        <h2 className="font-[family-name:--font-fraunces] text-4xl max-md:text-xl ">Transform your brand</h2>
        <p className="text-sm text-gray-500 font-[family-name:--font-barlow]" >We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the markenting for you.</p>
        <Link href={"#"} className="font-[family-name:--font-fraunces] uppercase text-xs underline decoration-yellow-400 ">learn more</Link>
      </div>
      <div className="h-full relative w-full bg-[#ffd302] max-md:order-1 max-md:h-52">
        <Image src={imageTransform} alt="" fill className="object-contain" />
      </div>
    </section>

    <section className="grid grid-cols-2 h-[29rem] max-md:grid-cols-1">
      <div className="h-full relative w-full bg-[#ff7062] max-md:h-52 ">
        <Image src={imageStandOut} alt="" fill className="object-contain" />
      </div>
      <div className="flex justify-center items-start flex-col mx-16 gap-6">
        <h2 className="font-[family-name:--font-fraunces] text-4xl max-md:text-xl">Stand out to the right audience</h2>
        <p className="text-sm text-gray-500 font-[family-name:--font-barlow]" >
          {"Using a collaborative formula of designers, researchers, photographers, veiographers, and copywriters, we'll build and extend yout brand in digital places."}
        </p>
        <Link href={"#"} className="font-[family-name:--font-fraunces] uppercase text-xs underline decoration-red-500 ">learn more</Link>
      </div>

    </section>

    <section className="grid grid-cols-2 h-[29rem] max-md:grid-cols-1">
      <div className="h-full relative w-full bg-[#9cdcce] ">
        <Image src={imageGraphic} alt="" fill className="object-contain " />

        <div className="absolute text-center bottom-12 font-[family-name:--font-fraunces] text-teal-900 max-md:bottom-1">
          <h2 className="text-2xl max-md:text-xl">Graphic Design</h2>
          <p className="px-16 mt-3 text-sm">{"Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention."}</p>
        </div>

      </div>
      <div className="h-full relative w-full bg-[#62c7ff] ">
        <Image src={imagePhotography} alt="" fill className="object-contain" />

        <div className="absolute text-center bottom-12   font-[family-name:--font-fraunces] text-sky-900 max-md:bottom-1">
          <h2 className="text-2xl max-md:text-xl">Photography</h2>
          <p className="px-16 mt-3 text-sm">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
        </div>
      </div>
    </section>



  </>
}