import Image from "next/image";
import aboutImage from "@/app/_assets/images/about.jpg";
import { FaClock, FaRegCalendarCheck, FaRegComments } from "react-icons/fa6";

export const About = () => {
  return (
    <section className={"mt-16 md:mt-32 "} id={"about"}>
      <div className={"container items-center font-inter"}>
        <div className={"mb-11 flex flex-col items-center gap-2"}>
          <h2
            className={
              "w-fit rounded-full bg-blue-300 px-7 py-2 text-sm text-blue-500"
            }
          >
            ABOUT
          </h2>
          <h3 className={"text-xl"}>
            Find Out More <span className={"text-blue-500"}>About Us</span>
          </h3>
        </div>
        <div
          className={
            "flex flex-col items-center justify-center gap-6 lg:flex-row "
          }
        >
          <Image
            src={aboutImage}
            alt={"about Image"}
            className={
              "aspect-[3/2] w-[20rem] rounded object-contain md:w-[36rem] lg:w-[40rem]"
            }
            priority={true}
          />
          <div className={"w-10/12 lg:w-1/2"}>
            <h1
              className={
                " mb-3 pt-5 font-poppins text-base font-medium md:text-2xl"
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              finibus dignissim ante vel cursus. Integer ligula felis
            </h1>
            <p
              className={
                "whitespace-pre-line indent-2 font-poppins text-sm font-normal leading-6 md:text-base"
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              finibus dignissim ante vel cursus. Integer ligula felis,
              condimentum et massa vel, tincidunt consequat dui. Cras nec ipsum
              tincidunt, varius nisi vitae, malesuada eros. Aliquam faucibus
              ligula vitae hendrerit molestie. Phasellus sollicitudin fringilla
              lorem, vitae mattis erat varius in.
            </p>
            <ul className={"mt-9 md:mt-8 md:w-3/4"}>
              <li className={"mb-3 flex items-center gap-5"}>
                <FaClock size={"55px"} color={"rgb(59 130 246)"} />
                <div className={"font-poppins"}>
                  <h1
                    className={
                      "text-base font-medium md:text-xl md:font-normal"
                    }
                  >
                    Lorem ipsum dolor sit amet
                  </h1>
                  <p className={"text-sm text-gray-700"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    finibus dignissim ante vel cursus. Integer ligula felis,
                  </p>
                </div>
              </li>
              <li className={"mb-3 flex items-center gap-5"}>
                <FaRegCalendarCheck size={"55px"} color={"rgb(59 130 246)"} />
                <div className={"font-poppins"}>
                  <h1
                    className={
                      "text-base font-medium md:text-xl md:font-normal"
                    }
                  >
                    Lorem ipsum dolor sit amet
                  </h1>
                  <p className={"text-sm text-gray-700"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    finibus dignissim ante vel cursus. Integer ligula felis,
                  </p>
                </div>
              </li>
              <li className={"mb-3 flex items-center gap-5"}>
                <FaRegComments size={"55px"} color={"rgb(59 130 246)"} />
                <div className={"font-poppins"}>
                  <h1
                    className={
                      "text-base font-medium md:text-xl md:font-normal"
                    }
                  >
                    Lorem ipsum dolor sit amet
                  </h1>
                  <p className={"text-sm text-gray-700"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    finibus dignissim ante vel cursus. Integer ligula felis,
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
