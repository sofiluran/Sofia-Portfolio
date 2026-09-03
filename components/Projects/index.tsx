import Image from "next/image"
import { projectType } from "@/data/data"
import { MyProjects } from "@/data/data"

const Projects = () => {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="mt-2 text-4xl font-black uppercase tracking-[2px] text-white sm:text-5xl [text-shadow:2px_2px_0px_rgba(0,0,0,0.15)]">
          My Projects
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg font-medium text-white/90">
          A selection of assignments and projects built during my education.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {MyProjects.map((project: projectType) => (
          <article
            key={project.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/30 bg-black/10 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/60 hover:bg-black/20 sm:p-8"
          >
            <div>
              <div className="relative mb-6 aspect-video w-full overflow-hidden rounded-2xl bg-black/20 shadow-xl border border-white/20">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mb-3 mt-1 text-2xl font-black text-[#fff1c1] [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)]">
                {project.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed font-semibold text-white [text-shadow:1px_1px_2px_rgba(0,0,0,0.4)]">
                {project.description}
              </p>
            </div>

            <div>
              <div className="mb-6 flex flex-wrap gap-2">
                {project.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full bg-black/30 border border-white/20 px-3.5 py-1 text-xs font-bold text-white shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-white transition-colors hover:text-[#fff1c1] [text-shadow:1px_1px_2px_rgba(0,0,0,0.3)]"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-[#fff1c1] px-5 py-2 text-sm font-extrabold text-black transition-all hover:bg-white hover:scale-105 shadow-lg"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects