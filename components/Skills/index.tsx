import Image from "next/image";

const skills = [
  { name: "Next.js", icon: "/images/next.js.png" },
  { name: "HTML", icon: "/images/html.png" },
  { name: "CSS", icon: "/images/css-3.png" },
  { name: "React", icon: "/images/react.webp" },
  { name: "JavaScript", icon: "/images/js.png" },
  { name: "Typescript", icon: "/images/typescript.webp" },
  { name: "GitHub", icon: "/images/github.png" },
  { name: "Jest", icon: "/images/jest.png" },
  { name: "SCRUM Workflow", icon: "/images/scrum.png" },
  { name: "API Integration", icon: "/images/cloud-api.png" },
  { name: "Tailwind", icon: "/images/tailwind.svg" },
  { name: "Vercel", icon: "/images/vercel.webp" },
  { name: "Responsive Design", icon: "/images/responsive.png" },
  { name: "Figma", icon: "/images/figma.webp" },
  { name: "Node.js", icon: "/images/node.webp" },
];

const Skills = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="relative w-full mask-[linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-full gap-2.5 overflow-x-auto pb-4 pt-2 scroll-smooth no-scrollbar scrollbar-none sm:gap-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex shrink-0 items-center gap-2.5 rounded-full border border-white/15 bg-[#fff1c1] px-4 py-2 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[#fff1c1] hover:shadow-lg hover:shadow-[#fff1c1]/10 sm:gap-3 sm:px-5 sm:py-2.5"
            >
              <Image
                src={skill.icon}
                alt={`${skill.name} logotyp`}
                width={20}
                height={20}
                className="h-4 w-4 object-contain transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 sm:h-5 sm:w-5"
              />
              <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-black sm:text-xs sm:tracking-[1.5px]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;