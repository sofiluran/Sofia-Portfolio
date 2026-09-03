const About = () => {
  return (
    <div
      id="about"
      className="scroll-mt-24 mx-4 my-12 max-w-4xl rounded-2xl bg-[#fff1c1]/90 p-6 text-center shadow-2xl backdrop-blur-md sm:mx-auto sm:p-12 md:p-16"
    >
      <h2 className="mb-6 text-2xl font-extrabold uppercase tracking-[1.5px] text-black sm:mb-8 sm:text-3xl md:text-4xl">
        Hi, I&apos;m Sofia. Nice to meet you.
      </h2>

      <div className="mx-auto flex flex-col gap-5 text-sm font-medium leading-relaxed text-black/90 sm:gap-6 sm:text-base md:text-lg">
        <p>
          I&apos;m a frontend developer based in Stockholm, currently studying at
          Futuregames. My path into tech is not traditional{" "}
          <span className="font-bold text-black">– and that is my strength.</span>
        </p>
        <p>
          Before writing code, I studied cultural science and acting, earning a
          bachelor&apos;s degree in cultural studies from Stockholm University.
          Through storytelling, performance, and academic research, I developed a
          deep understanding of communication, human behavior, and how context,
          identity, and aesthetics shape the way people experience the world.
        </p>
        <p>
          When I&apos;m not coding, you&apos;ll likely find me exploring new
          restaurants, watching films, or drawing inspiration from art and
          culture.
        </p>
        <p className="font-semibold text-black">
          I&apos;m currently seeking opportunities as a Frontend Developer,
          where I can grow, contribute, and help create digital experiences that
          truly connect with people.
        </p>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:mt-10 sm:flex-row sm:gap-10">
        <a
          href="/SOFIA_RUNSTEN_SV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative pb-1 text-xs font-bold uppercase tracking-[2px] text-black sm:text-sm"
        >
          Swedish CV ↗
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
        </a>
        <a
          href="/SOFIA_RUNSTEN_ENG.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative pb-1 text-xs font-bold uppercase tracking-[2px] text-black sm:text-sm"
        >
          English CV ↗
          <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
    </div>
  );
};

export default About;