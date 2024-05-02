import React from "react";
import Image from "next/image";
import Link from "next/link";

const Card = ({ thumbnail, name, price, description, type }) => {
  return (
    <div className={"flex"}>
      <div className=" min-h-[27rem] max-w-sm rounded-lg border border-gray-200 bg-ghost-white shadow">
        <Link href="#">
          <Image
            className="rounded-t-lg  object-contain"
            src={thumbnail}
            alt="card-image"
            width={500}
            height={250}
          />
        </Link>
        <div className="p-5">
          <Link href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {name}
            </h5>
          </Link>
          <p className="mb-3 line-clamp-2 max-h-[80px] min-h-[75px] font-normal text-gray-700">
            {description}
          </p>
          <div className="flex justify-between">
            <Link
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
            >
              {type === "premium" ? "Buy Now" : "Belajar Sekarang"}
            </Link>
            <h1
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 "
            >
              {type === "premium" ? price : type.toUpperCase()}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
