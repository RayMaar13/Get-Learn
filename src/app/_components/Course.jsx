"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import react from "react";
import Card from "./Card";
import convertCurrency from "../utils/convertCurency";

function Course() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}courses`);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className={"mt-16 md:mt-32 "} id={"course"}>
      <div className={"container items-center font-inter"}>
        <div className={"mb-11 flex flex-col items-center gap-2"}>
          <h2
            className={
              "w-fit rounded-full bg-blue-300 px-7 py-2 text-sm text-blue-500"
            }
          >
            NEW COURSES
          </h2>
          <h3 className={"text-xl"}>
            Find Out New <span className={"text-blue-500"}>Courses</span>
          </h3>
        </div>
      </div>
      <div
        className={
          "mx-auto flex items-center justify-center px-14  2xl:w-[87rem]"
        }
      >
        <Swiper
          modules={[Navigation]}
          navigation={true}
          spaceBetween={50}
          slidesPerView={3}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            745: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {data?.data.data.map((course, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  key={index}
                  name={course.name}
                  thumbnail={course.thumbnail}
                  description={course.description}
                  price={convertCurrency(course.price)}
                  type={course.type}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default Course;
