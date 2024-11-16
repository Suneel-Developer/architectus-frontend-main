import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative py-[30px] px-5 md:px-20">
      <img
        src="/assets/footer-background.webp"
        alt="footer-background"
        className="object-cover -z-10 absolute w-full h-full left-0 right-0 top-0 bottom-0"
      />
      <div className="flex justify-between flex-col md:flex-row items-center gap-7 relative max-w-[1400px] w-full mx-auto">
        <Link href="/">
          <Image
            src="/assets/footer-logo.svg"
            alt="footer-logo"
            width={100}
            height={100}
            className="h-10 w-auto"
          />
        </Link>

        <p className="text-white/80 font-normal text-sm text-center">
          © Innovative AI Solutions for Urban Development. 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
