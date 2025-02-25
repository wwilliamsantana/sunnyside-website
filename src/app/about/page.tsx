import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Digital Marketing Agency</title>
        <meta name="description" content="Learn more about our digital marketing agency and how we help businesses grow online." />
      </Head>
      <section className="flex flex-col items-center gap-10 min-h-screen bg-white text-gray-800 p-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 font-[family-name:--font-fraunces] ">Who We Are</h2>
          <p className="text-lg leading-relaxed mb-4 font-[family-name:--font-barlow]">
            We are innovators, thinkers, and builders passionate about crafting seamless digital experiences.
            Our mission is to blend technology and creativity to deliver outstanding solutions.
          </p>
          <p className="text-lg leading-relaxed font-[family-name:--font-barlow]">
            With expertise in modern web frameworks, design systems, and scalable applications, we push boundaries
            to create engaging and efficient products that empower users worldwide.
          </p>
        </div>

        <Image
          src={"https://images.unsplash.com/photo-1600427652630-f97cc4db10cd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
          width={600}
          height={440}
          alt=""
          className="rounded-md"
        />

        <button className="mt-4 px-6 py-3 bg-sky-400 hover:bg-sky-500 text-white font-bold rounded-lg shadow-lg transition duration-300">
          Contact Us
        </button>

      </section>
    </>
  )
}