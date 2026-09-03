import Socials from "../Socials"
import Image from "next/image"

const Contact = () => {
  return (
    <section id="contact" className="bg-linear-to-br from-white/60 to-white/30 px-4 py-12 md:px-6 md:py-20">
      <div className="mx-auto grid max-w-225 grid-cols-1 gap-6 rounded-2xl bg-white p-6 text-center uppercase shadow-[0.5rem_0.5rem_0_rgba(73,70,70,0.25)] md:grid-cols-[1fr_auto] md:grid-rows-[auto_auto] md:gap-5 md:p-12 md:shadow-[0.75rem_0.75rem_0_rgba(73,70,70,0.25)]">
        <h2 className="font-extrabold italic text-3xl sm:text-4xl md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2 md:mb-4 md:text-5xl">
          Say hello!
        </h2>
        <div className="justify-self-center md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-3">
          <Image
            src="/images/Sofia.png"
            alt="Picture of Sofia"
            width={220}
            height={220}
            className="h-auto w-36 sm:w-44 md:h-50 md:w-auto md:max-w-55"
          />
        </div>
        <ul className="space-y-2 text-center text-base normal-case sm:text-lg md:mb-8 md:text-[18px]">
          <li>✨ Frontend Developer</li>
          <li>📍 Stockholm / Remote</li>
          <li>💬 Open to collaboration</li>
          <li>🎬 Background in storytelling & visual culture</li>
        </ul>
        <a 
          href="mailto:runsten.sofia@gmail.com"
          className="block rounded-lg bg-orange-400 px-6 py-3.5 text-base font-bold text-white no-underline transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-500 sm:text-[1.1rem] md:col-span-2 md:mt-8 md:px-7"
        >
          Contact me
        </a>
      </div>
      <Socials />
    </section>
  )
}

export default Contact