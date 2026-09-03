const Header = () => {
  return (
    <header className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-6 py-12 text-center uppercase tracking-[3px]">

      <span className="mb-4 text-xs font-bold tracking-[4px] text-white/90 sm:text-sm">
        Portfolio
      </span>

      <h1 className="mb-6 text-5xl font-black text-white sm:text-7xl md:text-8xl lg:text-9xl [text-shadow:2px_2px_0px_rgba(0,0,0,0.15)]">
        Sofia Runsten
      </h1>

      <h2 className="mx-auto max-w-2xl text-base font-semibold leading-relaxed text-white sm:text-xl md:text-2xl [text-shadow:1px_1px_0px_rgba(0,0,0,0.15)]">
        Frontend Developer with a background in storytelling
      </h2>

    </header>
  )

}

export default Header