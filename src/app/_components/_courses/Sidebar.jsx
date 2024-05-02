import { MdOutlineFilterAlt } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import "./Sidebar.css";
export const Sidebar = ({ children, isFilterClicked, filterHandler }) => {
  return (
    <div className={"relative flex "}>
      {/*w-1/2*/}
      <aside
        className={`absolute mr-5 mt-10 backdrop-blur-sm  md:static  ${
          isFilterClicked ? "block animate-fadeIn" : "hidden "
        } lg:bg-transparent-pulse flex w-full pb-10 pl-3 pt-20 font-montserrat text-dark-slate-gray md:block md:w-1/4 md:border-r-2`}
      >
        <div className={"h-[29rem] w-2/3 bg-light-white md:w-fit"}>
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
                  type="checkbox"
                  className="input-checkbox"
                  value={"true"}
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
                  type="checkbox"
                  className="input-checkbox"
                  value={"false"}
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
                  type="checkbox"
                  className="input-checkbox"
                  value={"premium"}
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
                  type="checkbox"
                  className="input-checkbox"
                  value={"free"}
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
                  type="checkbox"
                  className="input-checkbox"
                  value={"all-level"}
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
                  type="checkbox"
                  className="input-checkbox"
                  value={"beginner"}
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
                  type="checkbox"
                  className="input-checkbox"
                  value={"intermediate"}
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
                  type="checkbox"
                  className="input-checkbox"
                  value={"advance"}
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
