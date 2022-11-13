import Image from "next/image";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export default async function Home() {
  return (
    <div className="flex flex-col items-center h-screen pt-32">
      <Image
        src="/images/hero.png"
        alt="Marks Avatar"
        width={165}
        height={165}
        priority
        className="rounded-full"
      />

      <h1 className="pt-2 text-5xl font-bold text-center bold-text bg-clip-text">
        Mark Strudwick
      </h1>
      <p className="pt-1 text-xl text-center">Software Engineer</p>

      <div className="flex items-center pt-4 text-xl">
        <a
          href="https://github.com/mark-strudwick/"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
          className="p-3 transition-colors duration-300 rounded-full hover:bg-brand-pink"
        >
          <FiGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/mark-strudwick/"
          title="LinkedIn"
          target="_blank"
          rel="noreferrer"
          className="p-3 transition-colors duration-300 rounded-full hover:bg-brand-pink"
        >
          <FiLinkedin />
        </a>
      </div>
    </div>
  );
}
