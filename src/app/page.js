import Image from "next/image";
import heroImage from "./_assets/images/hero.jpg";
import amazon from "./_assets/images/Amazon-Logo.png";
import facebook from "./_assets/images/Facebook-Logo.png";
import google from "./_assets/images/Google-Logo.png";
import microsoft from "./_assets/images/Microsoft-Logo.png";
import tesla from "./_assets/images/Tesla-Logo.png";
import { Navbar } from "@/app/_components/Navbar/Navbar";
import styles from "./Home.module.css";
import { HeroWave } from "@/app/_components/HeroWave";
import { About } from "@/app/_components/About";
import { Service } from "@/app/_components/Service";

export default function Home() {
  return (
    <>
      <header className={"relative z-30 bg-blue-700 transition-all"}>
        {/*Navbar*/}
        <Navbar />
        {/*Hero Section*/}
        <section
          className={
            "container relative mx-auto mt-16 flex w-fit flex-col-reverse items-center gap-20 text-gray-200 md:flex-row lg:gap-44 "
          }
        >
          <div className={"ml-5"}>
            <h1 className={"mb-8 font-poppins text-2xl md:text-3xl "}>
              The best way to get new Skill
            </h1>
            <form method={"post"}>
              <input
                type={"email"}
                name={"email"}
                className={
                  "mr-4 rounded px-8 py-2 font-inter text-gray-500 focus-visible:outline-none md:mb-3"
                }
                placeholder={"example@email"}
              />
              <button
                className={
                  "mt-4 rounded bg-blue-500 px-3 py-1 text-lg hover:scale-105 hover:bg-blue-600 md:mt-0 md:px-5 md:py-2 lg:ml-3 "
                }
              >
                Join Now!
              </button>
            </form>
          </div>
          <div>
            <Image
              src={heroImage}
              alt={"Hero Image"}
              className={
                "relative z-10 aspect-square w-screen md:aspect-auto md:w-71 md:rounded"
              }
              priority={true}
              placeholder={"blur"}
            />
            <div className={styles.heroImage} />
          </div>
        </section>
      </header>
      <main className={"h-52"}>
        <HeroWave />
        {/*Company List */}
        <div
          className={
            "mx-auto flex w-72 flex-wrap justify-center gap-3 sm:mx-0 sm:w-auto sm:flex-nowrap md:gap-14 xl:gap-24"
          }
        >
          <Image
            src={amazon}
            alt={"amazon logo"}
            className={
              "aspect-[3/2] w-20 object-contain grayscale hover:grayscale-0 sm:w-24 md:mt-4 lg:mt-6 lg:w-32 xl:w-44"
            }
            priority={true}
          />
          <Image
            src={facebook}
            alt={"facebook logo"}
            className={
              "aspect-[3/2] w-20 object-contain grayscale hover:grayscale-0 sm:w-24 lg:w-32 xl:w-44"
            }
            priority={true}
          />
          <Image
            src={google}
            alt={"google logo"}
            className={
              "aspect-[3/2] w-20 object-contain grayscale hover:grayscale-0 sm:w-24 lg:w-32 xl:w-44"
            }
            priority={true}
          />
          <Image
            src={microsoft}
            alt={"microsoft logo"}
            className={
              "aspect-[3/2] w-20 object-contain grayscale hover:grayscale-0 sm:w-24 lg:w-32 xl:w-44"
            }
            priority={true}
          />
          <Image
            src={tesla}
            alt={"tesla logo"}
            className={
              "aspect-[3/2] w-20 object-contain grayscale hover:grayscale-0 sm:w-24 lg:w-32 xl:w-44"
            }
            quality={"50"}
            loading={"eager"}
          />
        </div>
        {/*About Section*/}
        <About />
        {/*Service Section*/}
        <Service />
        <section className={"h-80"}>

        </section>
      </main>
    </>
  );
}
