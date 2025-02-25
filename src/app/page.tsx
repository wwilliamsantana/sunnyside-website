import Image from "next/image"

import imageGalleryOne from "../assets/image-gallery-milkbottles.jpg"
import imageGalleryTwo from "../assets/image-gallery-orange.jpg"
import imageGalleryThree from "../assets/image-gallery-cone.jpg"
import imageGalleryFor from "../assets/image-gallery-sugarcubes.jpg"

import { Sections } from "@/components/sections";
import { Testimonials } from "@/components/testimonials";


export default function Home() {
  return (
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

  );
}

