"use client";
import { MdOutlineFilterAlt } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import "./Sidebar.css";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

const Sidebar = ({ children, isFilterClicked, filterHandler }) => {
  const router = useRouter();
  const pathname = usePathname();
  let apiurl = pathname;
  const checkboxesRef = useRef([]);
  const filterChangeHandler = async (event) => {
    const paramName = event.target.name;
    const paramValue = event.target.value;

    if (event.target.checked) {
      let queryParams = new URLSearchParams(window.location.search);
      queryParams.set(paramName, paramValue);
      const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
      router.push(newUrl);
    }
  };

  const resetCheckboxes = () => {
    let queryParams = new URLSearchParams(window.location.search);
    checkboxesRef.current.forEach((checkbox) => {
      if (checkbox && checkbox.checked) {
        queryParams.delete("certi");
        queryParams.delete("price");
        queryParams.delete("level");
        router.push(apiurl);
        checkbox.checked = false;
      }
    });
  };

  return (
    <div className={"relative flex "}>
      {/*w-1/2*/}
      <aside
        className={`absolute mr-5 mt-10 backdrop-blur-sm  md:static  ${
          isFilterClicked ? "block animate-fadeIn" : "hidden "
        } lg:bg-transparent-pulse flex w-full pb-10 pl-3 pt-20 font-montserrat text-dark-slate-gray md:block md:border-r-2 lg:w-[30%]`}
      >
        <div className={"h-[31rem] w-2/3 bg-light-white md:w-fit"}>
          <span className={"flex items-center"}>
            <span className={"flex items-center"}>
              <MdOutlineFilterAlt size={23} />
              <h1 className={"text-2xl"}>Filter</h1>
            </span>
          </span>
          <form>
            <div className={"my-4"}>
              <p className={"text-xl"}>Feature</p>
              <div className="checkbox-wrapper">
                <input
                  id="certificate"
                  type="radio"
                  name={"certi"}
                  ref={(element) => {
                    checkboxesRef.current.push(element);
                  }}
                  value={"true"}
                  className="input-checkbox"
                  onChange={filterChangeHandler}
                />
                <svg>
                  <use xlinkHref="#checkmark" />
                </svg>
                <label htmlFor="certificate">Certificate</label>
                <svg xmlns="http://www.w3.org/2000/svg" className={"hidden"}>
                  <symbol id="checkmark" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      fill="none"
                      d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                    ></path>
                  </symbol>
                </svg>
              </div>
              <div className="checkbox-wrapper">
                <input
                  id="no-certificate"
                  type="radio"
                  name={"certi"}
                  ref={(element) => {
                    checkboxesRef.current.push(element);
                  }}
                  className="input-checkbox"
                  value={"false"}
                  onChange={filterChangeHandler}
                />
                <svg>
                  <use xlinkHref="#checkmark" />
                </svg>
                <label htmlFor="no-certificate">Tanpa Certificate</label>
                <svg xmlns="http://www.w3.org/2000/svg" className={"hidden"}>
                  <symbol id="checkmark" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      fill="none"
                      d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                    ></path>
                  </symbol>
                </svg>
              </div>
            </div>
            <div className={"my-4"}>
              <p className={"text-xl"}>Price</p>
              <div className="checkbox-wrapper">
                <input
                  id="paid"
                  type="radio"
                  name={"price"}
                  ref={(element) => {
                    checkboxesRef.current.push(element);
                  }}
                  className="input-checkbox"
                  value={"premium"}
                  onChange={filterChangeHandler}
                />
                <svg>
                  <use xlinkHref="#checkmark" />
                </svg>
                <label htmlFor="paid">Berbayar</label>
                <svg xmlns="http://www.w3.org/2000/svg" className={"hidden"}>
                  <symbol id="checkmark" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      fill="none"
                      d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                    ></path>
                  </symbol>
                </svg>
              </div>
              <div className="checkbox-wrapper">
                <input
                  id="free"
                  type="radio"
                  name={"price"}
                  ref={(element) => {
                    checkboxesRef.current.push(element);
                  }}
                  className="input-checkbox"
                  value={"free"}
                  onChange={filterChangeHandler}
                />
                <svg>
                  <use xlinkHref="#checkmark" />
                </svg>
                <label htmlFor="free">Gratis</label>
                <svg xmlns="http://www.w3.org/2000/svg" className={"hidden"}>
                  <symbol id="checkmark" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      fill="none"
                      d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                    ></path>
                  </symbol>
                </svg>
              </div>
            </div>
            <div className={"my-4"}>
              <p className={"text-xl"}>Level</p>
              <div className="checkbox-wrapper">
                <input
                  id="all-level"
                  type="radio"
                  name={"level"}
                  ref={(element) => {
                    checkboxesRef.current.push(element);
                  }}
                  className="input-checkbox"
                  value={"all-level"}
                  onChange={filterChangeHandler}
                />
                <svg>
                  <use xlinkHref="#checkmark" />
                </svg>
                <label htmlFor="all-level">All Level</label>
                <svg xmlns="http://www.w3.org/2000/svg" className={"hidden"}>
                  <symbol id="checkmark" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      fill="none"
                      d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                    ></path>
                  </symbol>
                </svg>
              </div>
              <div className="checkbox-wrapper">
                <input
                  id="beginner"
                  type="radio"
                  name={"level"}
                  ref={(element) => {
                    checkboxesRef.current.push(element);
                  }}
                  className="input-checkbox"
                  value={"beginner"}
                  onChange={filterChangeHandler}
                />
                <svg>
                  <use xlinkHref="#checkmark" />
                </svg>
                <label htmlFor="beginner">Beginner</label>
                <svg xmlns="http://www.w3.org/2000/svg" className={"hidden"}>
                  <symbol id="checkmark" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      fill="none"
                      d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                    ></path>
                  </symbol>
                </svg>
              </div>
              <div className="checkbox-wrapper">
                <input
                  id="intermediate"
                  type="radio"
                  name={"level"}
                  ref={(element) => {
                    checkboxesRef.current.push(element);
                  }}
                  className="input-checkbox"
                  value={"intermediate"}
                  onChange={filterChangeHandler}
                />
                <svg>
                  <use xlinkHref="#checkmark" />
                </svg>
                <label htmlFor="intermediate">Intermediate</label>
                <svg xmlns="http://www.w3.org/2000/svg" className={"hidden"}>
                  <symbol id="checkmark" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      fill="none"
                      d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                    ></path>
                  </symbol>
                </svg>
              </div>
              <div className="checkbox-wrapper">
                <input
                  id="advance"
                  type="radio"
                  name={"level"}
                  ref={(element) => {
                    checkboxesRef.current.push(element);
                  }}
                  className="input-checkbox"
                  value={"advance"}
                  onChange={filterChangeHandler}
                />
                <svg>
                  <use xlinkHref="#checkmark" />
                </svg>
                <label htmlFor="advance">Advance</label>
                <svg xmlns="http://www.w3.org/2000/svg" className={"hidden"}>
                  <symbol id="checkmark" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      fill="none"
                      d="M22.9 3.7l-15.2 16.6-6.6-7.1"
                    ></path>
                  </symbol>
                </svg>
              </div>
              <div className={"mr-3 flex justify-end md:mr-2  "}>
                <button
                  className={" text-blue-500 hover:text-indigo-600"}
                  onClick={resetCheckboxes}
                  type="button"
                >
                  reset
                </button>
              </div>
            </div>
          </form>
        </div>
        <div
          className={
            "flex h-[29rem] w-1/2 items-start justify-end pr-4 backdrop-blur-sm md:hidden"
          }
          onClick={filterHandler}
        >
          <button
            className={"rounded-full border border-gray-200 bg-white p-2"}
          >
            <IoMdClose size={27} />
          </button>
        </div>
      </aside>
      {children}
    </div>
  );
};

export default Sidebar;
