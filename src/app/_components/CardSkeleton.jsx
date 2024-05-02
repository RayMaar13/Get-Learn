import Link from "next/link";
import Image from "next/image";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, index) => {
      return (
        <div className={"flex border-0"} key={index}>
          <div className=" max-w-sm rounded-lg border border-t-0 border-gray-200 bg-ghost-white shadow ">
            <Link href="#">
              <Skeleton
                enableAnimation={true}
                containerClassName={" flex-1"}
                width={280}
                height={180}
              />
            </Link>
            <div className="p-5">
              <Link href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  <Skeleton width={100} height={18} />
                </h5>
              </Link>
              <p className="mb-3 line-clamp-2 max-h-[80px] min-h-[75px] font-normal text-gray-700">
                <Skeleton count={1.5} />
              </p>
              <div className="flex justify-between">
                <Skeleton containerClassName={"flex-1"} width={70} />
              </div>
            </div>
          </div>
        </div>
      );
    });
};
