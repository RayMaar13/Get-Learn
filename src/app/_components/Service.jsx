import { PiCertificateDuotone, PiCreditCardBold, PiBriefcaseBold } from "react-icons/pi";
export const Service = () => {
  return (
    <section className={"mt-16 md:mt-32 "} id={"service"}>
      <div className={"container items-center font-inter"}>
        <div className={"mb-11 flex flex-col items-center gap-2"}>
          <h2
            className={
              "w-fit rounded-full bg-blue-300 px-7 py-2 text-sm text-blue-500"
            }
          >
            Service
          </h2>
          <h3 className={"text-xl"}>
            Check Our <span className={"text-blue-500"}>Service</span>
          </h3>
        </div>
        <div className={"mt-16 flex justify-center items-center gap-12 text-center"}>
          <div className={"border-2 shadow-md hover:shadow-lg hover:scale-105 transition-transform border-gray-200 px-12 py-20 rounded-lg"}>
            <span className={"inline-grid justify-center bg-blue-100 px-4 py-3 rounded-md mb-4"}>
              <PiCertificateDuotone
                size={"55px"}
                color={"rgb(59 130 246)"}
                className={""}
              />
            </span>
            <h1>Pro Certificate</h1>
            <p>Get a Pro Certificate from our Courses</p>
          </div>
          <div className={"border-2 shadow-md hover:shadow-lg hover:scale-105 transition-transform border-gray-200 px-12 py-20 rounded-lg"}>
            <span className={"inline-grid justify-center bg-blue-100 px-4 py-3 rounded-md mb-4"}>
              <PiCreditCardBold
                size={"55px"}
                color={"rgb(59 130 246)"}
                className={""}
              />
            </span>
            <h1>Low Price</h1>
            <p>Get Professional Courses at Low Prices!</p>
          </div>
          <div className={"border-2 shadow-md hover:shadow-lg hover:scale-105 transition-transform border-gray-200 px-12 py-20 rounded-lg"}>
            <span className={"inline-grid justify-center bg-blue-100 px-4 py-3 rounded-md mb-4"}>
              <PiBriefcaseBold
                size={"55px"}
                color={"rgb(59 130 246)"}
                className={""}
              />
            </span>
            <h1>Portfolio Project</h1>
            <p>Dapatkan Portofolio untuk Lamaran Pekerjaan</p>
          </div>
        </div>
      </div>
    </section>
  );
};
