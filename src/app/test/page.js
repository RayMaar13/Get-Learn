// CourseFilter.js
"use client";
import { useState } from "react";
import { MdOutlineFilterAlt } from "react-icons/md";
import "../_components/_courses/Sidebar.css";

const CourseFilter = () => {
  const filters = [
    { key: "q", id: "filter1" },
    { key: "certi", id: "filter2" },
    { key: "price", id: "filter3" },
  ];

  const [apiUrl, setApiUrl] = useState("http://localhost:8888/courses");

  const handleFilterChange = (event) => {
    setApiUrl(
      (prevUrl) =>
        `${prevUrl.includes("?") ? "&" : "?"}${filter.key}=${
          event.target.value
        }`,
    );
  };

  const updateApiUrl = (filterKey, value) => {
    let newApiUrl = "http://localhost:8888/courses";

    filters.forEach((filter) => {
      const filterValue =
        filter.key === filterKey
          ? value
          : document.getElementById(filter.id).checked
          ? "true"
          : "";
      if (filterValue) {
        newApiUrl += `${newApiUrl.includes("?") ? "&" : "?"}${
          filter.key
        }=${filterValue}`;
      }
    });

    return newApiUrl;
  };

  return (
    <div>
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
      <p>API URL: {apiUrl}</p>
    </div>
  );
};

export default CourseFilter;
