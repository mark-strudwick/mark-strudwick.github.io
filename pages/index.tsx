import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <div className="bg-brand-light-pink">
      <div className="items-center h-screen mx-4 md:mx-auto md:flex md:w-4/5 md:flex-col lg:w-2/5">
        <div className="pt-10" />

        <Head>
          <title>Mark Strudwick</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <link rel="icon" href="/favicon.png" />
        </Head>

        <main>
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
        </main>
      </div>
    </div>
  );
};

export default Home;
