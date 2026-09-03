import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="inline-block transition-opacity hover:opacity-80">
      <Image
        src="/images/SR-logo-vit.PNG"
        alt="Sofia Runsten Logo"
        width={50}
        height={50}
        priority
        className="h-10 w-auto object-contain"
      />
    </Link>
  );
};

export default Logo;