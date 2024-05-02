"use client";
import Card from "@/app/_components/Card";
import convertCurrency from "@/app/utils/convertCurency";
import { lazy, Suspense, useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Sidebar from "@/app/_components/_courses/Sidebar";
import { MdOutlineFilterAlt } from "react-icons/md";
import CoursesDisplay from "@/app/_components/_courses/CoursesDisplay";
import { CardSkeleton } from "@/app/_components/CardSkeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import page from "@/app/test/page";
import { log } from "next/dist/server/typescript/utils";

const Page = () => {
  const [data, setData] = useState();
  const [isError, setIsError] = useState(false);
  const [isFilterClicked, setIsFilterClicked] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  let query;
  let pageNumber = data?.data.total;
  // TODO: Ubh Initial Fetch menggunakan React Context
  useEffect(() => {
    const fetchData = async (event) => {
      if (searchParams.toString()) {
        const params = searchParams.toString();
        try {
          const response = await fetch(
            `${process.env.API_URL}courses/?${params}`,
          );
          if (!response.ok) {
            if (response.status === 404) {
              setIsError(true);
              setData(null);
            }
            console.log("error");
          } else {
            const jsonData = await response.json();
            setData(jsonData);
            setIsError(false);
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      } else {
        try {
          const response = await fetch(`${process.env.API_URL}courses/`);
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error("An error occurred:", error);
        }
      }
    };

    fetchData();
  }, [searchParams]);

  const onSubmit = async (event) => {
    const params = searchParams.toString();
    try {
      event.preventDefault();
      const response = await fetch(`${process.env.API_URL}courses/?${params}`);
      query = searchParams.get("q");
      if (response.status === 404) {
        console.log(isError);
        setIsError(true);
      }

      const data = await response.json();
      console.log(isError);
      setData(data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  const filterHandler = () => {
    setIsFilterClicked((prevState) => !prevState);
  };

  const searchChangeHandler = async (event) => {
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set("q", event.target.value);
    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
    console.log(newUrl);
    router.push(newUrl);
  };

  return (
    <>
      <SkeletonTheme baseColor={"rgb(156 163 175)"} highlightColor={"#F0F8FF"}>
        <Sidebar
          isFilterClicked={isFilterClicked}
          filterHandler={() => {
            setIsFilterClicked(false);
          }}
        >
          <div className={"grid justify-center"}>
            <form
              onSubmit={onSubmit}
              className={"relative mt-14 flex justify-center"}
            >
              <input
                type={"text"}
                name={"search"}
                placeholder={"Find Courses"}
                onChange={searchChangeHandler}
                className={
                  "h-9 w-96 rounded-2xl border border-gray-300 px-4 py-1 font-poppins text-gray-600 outline-none  transition-transform focus-visible:border-gray-500"
                }
              />
              <span
                className={
                  "absolute inset-y-0 right-[10%] flex items-center pl-3 sm:right-[27%] md:right-[27%] lg:right-[35%]"
                }
              >
                <IoIosSearch color={"rgb(75, 85, 99)"} />
              </span>
            </form>
            <button
              onClick={filterHandler}
              className={" mt-5 flex justify-center md:hidden"}
            >
              <span className={"flex items-center"}>
                <MdOutlineFilterAlt size={23} />
                <h1 className={"text-2xl"}>Filter</h1>
              </span>
            </button>
            <h1
              className={
                "mb-10 ml-4 mt-12 font-inter text-xl text-blue-500 md:ml-0"
              }
            >
              Course List
            </h1>
            {/*TODO:ERROR Modal*/}
            <h3>{query && `Menampilkan Hasil dari ${query}...`}</h3>
            <div
              className={
                "mx-auto flex flex-wrap justify-center gap-x-8 gap-y-5 2xl:w-[77rem] 2xl:justify-normal"
              }
            >
              {console.log(isError)}
              {isError && <h1>error</h1>}
              {data ? (
                data.data?.data.map((course, index) => {
                  return (
                    <Card
                      key={index}
                      id={course.id}
                      name={course.name}
                      thumbnail={course.thumbnail}
                      description={course.description}
                      price={convertCurrency(course.price)}
                      type={course.type}
                    />
                  );
                })
              ) : (
                <CardSkeleton cards={6} />
              )}
            </div>
            <div className={"flex justify-center"}>
              <div>
                <button className={"mx-2"}>{"<"}</button>
                {console.log(pageNumber)}
                {pageNumber &&
                  Array.from({ length: pageNumber }, (_, index) => (
                    <button key={index} className="mx-2">
                      {index + 1}
                    </button>
                  ))}
                <button className={"mx-2"}>{">"}</button>
              </div>
            </div>
          </div>
        </Sidebar>
      </SkeletonTheme>
    </>
  );
};
export default Page;
