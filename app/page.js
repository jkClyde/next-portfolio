import Image from "next/image"

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row max-w-[1720px] mx-auto px-[15px]">
      {/* Image Container */}
      <div className="h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="" fill className="object-contain" />
      </div>
      {/* Text Container */}
      <div className="h-full lg:w-[767px] flex flex-col gap-4 md:gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold text-center md:text-left text-black">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-center md:text-left text-black ">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 ">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white mx-auto md:mx-0">
              View My Work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black text-black mx-auto md:mx-0">
              Contact Me
            </button>
          </div>
        </div>
    </div>
  )
}

export default Homepage