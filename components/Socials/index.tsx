import Link from "next/link"
import Image from "next/image"

const socialLinks = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sofia-runsten-5b7bb5275",
    icon: "/images/linkedin_logo.png"
  },
  {
    name: "Github",
    href: "https://github.com/sofiluran",
    icon: "/images/github_logo.png"
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sofilur",
    icon: "/images/instagram_logo.png"
  }
]

const Socials = () => {
  return (
    <div className="flex justify-center items-center gap-6 mt-10 p-6">
      {socialLinks.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${item.name}-profile`}
          className="transition-transform duration-300 hover:scale-110 focus:outline-none">

          <Image
            src={item.icon}
            alt={`${item.name} logo`}
            width={50}
            height={50}
            className="w-auto h-12 object-contain" />
        </Link>
      ))}
    </div>
  )
}

export default Socials