import Image from "next/image"

import imageJennie from "../assets/image-jennie.jpg"
import imageThomas from "../assets/image-thomas.jpg"
import imageEmily from "../assets/image-emily.jpg"



export function Testimonials() {
  return <>
    <article className="mt-28">
      <h3 className="text-center text-xl text-gray-400 font-bold uppercase tracking-[0.35rem] font-[family-name:--font-barlow] max-md:text-lg">Client testimonials</h3>

      <div className="flex gap-12 justify-center items-center mt-16 max-md:flex-col">

        <div className="w-1/5 flex flex-col items-center justify-center gap-7 max-md:w-3/4 ">
          <Image src={imageEmily} width={80} height={80} alt="user" className="rounded-full" />

          <p className="text-center text-sm font-[family-name:--font-barlow] text-gray-600">We put ourtrust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

          <div className="flex flex-col items-center">
            <strong className="font-[family-name:--font-fraunces]">Emily R.</strong>
            <span className="font-[family-name:--font-barlow] text-sm text-gray-300 ">Marketing Director</span>
          </div>
        </div>

        <div className="w-1/5 flex flex-col items-center justify-center gap-7 max-md:w-3/4">
          <Image src={imageThomas} width={80} height={80} alt="user" className="rounded-full" />

          <p className="text-center text-sm font-[family-name:--font-barlow] text-gray-600">{"Sunnyside's enthusiasm coupled their keen interest in our brand's success made it a satisfying and enjoyable experience."}</p>

          <div className="flex flex-col items-center">
            <strong className="font-[family-name:--font-fraunces]">Thomas S.</strong>
            <span className="font-[family-name:--font-barlow] text-sm text-gray-300 ">Chief Operating Officer</span>
          </div>
        </div>

        <div className="w-1/5 flex flex-col items-center justify-center gap-7 max-md:w-3/4">
          <Image src={imageJennie} width={80} height={80} alt="user" className="rounded-full" />

          <p className="text-center text-sm font-[family-name:--font-barlow] text-gray-600">Incredible end result! Our sales increased over 400% when we worked with Sunnyside highly recommended!</p>

          <div className="flex flex-col items-center">
            <strong className="font-[family-name:--font-fraunces]">Jennie F.</strong>
            <span className="font-[family-name:--font-barlow] text-sm text-gray-300 ">Business Owner</span>
          </div>
        </div>


      </div>
    </article>
  </>
}