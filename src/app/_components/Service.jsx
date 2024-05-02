import {
  PiCertificateDuotone,
  PiCreditCardBold,
  PiBriefcaseBold,
} from "react-icons/pi";
export const Service = () => {
  return (
    <section className={"mt-16 md:mt-32 "} id={"service"}>
      <div className={"container mx-auto font-inter"}>
        <div className={"mb-11 flex flex-col items-center gap-2"}>
          <h2
            className={
              "w-fit rounded-full bg-blue-300 px-7 py-2 text-sm text-blue-500"
            }
          >
            SERVICE
          </h2>
          <h3 className={"text-xl"}>
            Check Our <span className={"text-blue-500"}>Service</span>
          </h3>
        </div>
        <div
          className={
            "mt-16 flex flex-col items-center justify-center gap-12 text-center md:flex-row"
          }
        >
          <div
            className={
              "rounded-lg border-2 border-gray-200 px-12 py-20 shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            }
          >
            <span
              className={
                "mb-4 inline-grid justify-center rounded-md bg-blue-100 px-4 py-3"
              }
            >
              <PiCertificateDuotone
                size={"55px"}
                color={"rgb(59 130 246)"}
                className={""}
              />
            </span>
            <h1 className={"font-semibold"}>Pro Certificate</h1>
            <p className={"mt-3 font-poppins"}>
              Get a Pro Certificate from our Courses
            </p>
          </div>
          <div
            className={
              "rounded-lg border-2 border-gray-200 px-12 py-20 shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            }
          >
            <span
              className={
                "mb-4 inline-grid justify-center rounded-md bg-blue-100 px-4 py-3"
              }
            >
              <PiCreditCardBold
                size={"55px"}
                color={"rgb(59 130 246)"}
                className={""}
              />
            </span>
            <h1 className={"font-semibold"}>Low Price</h1>
            <p className={"mt-3 font-poppins"}>
              Get Professional Courses at Low Prices!
            </p>
          </div>
          <div
            className={
              "rounded-lg border-2 border-gray-200 px-12 py-20 shadow-md transition-transform hover:scale-105 hover:shadow-lg"
            }
          >
            <span
              className={
                "mb-4 inline-grid justify-center rounded-md bg-blue-100 px-4 py-3"
              }
            >
              <PiBriefcaseBold
                size={"55px"}
                color={"rgb(59 130 246)"}
                className={""}
              />
            </span>
            <h1 className={"font-semibold"}>Portfolio Project</h1>
            <p className={"mt-3 font-poppins"}>
              Dapatkan Portofolio untuk Lamaran Pekerjaan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
