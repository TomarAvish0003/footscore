import { matchesType } from "@/types";
import Image from "next/image";
import React from "react";

const Competition = ({ data }: { data: matchesType }) => {
    const date = new Date(data.utcDate);
    const dateConvert = date.toDateString();
  return (
    <div className="mb-4 flex justify-between items-center px-4 py-1 bg-slate-600 hover:bg-slate-700 rounded-md ">
      <div className="flex space-x-4">
        <Image
          src={data?.competition.emblems ?? ""}
          alt={data?.competition.name}
          width={20}
          height={20}
        />
        <p className="text-sm text-teal-400">{data?.competition.name}</p>
      </div>
      <p className="text-xs md:text-sm">{dateConvert}</p>
    </div>
  );
};

export default Competition;
