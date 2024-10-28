import React from "react";
import BostTitle from "../BostTitle/BostTitle";
import Pargraph from "../Pargraoh/Pargraph";
import { Link } from "react-router-dom";
export default function Email() {
  return (
    <div className="pb-7.5">
      <div className="text-center">
      <BostTitle classText={true} title="Newlatters" />
      </div>
    <div className="flex flex-col justify-startt items-start sm:items-center">
    <p className="text-5xl font-semibold leading-[60px] dark:text-white pb-3 pt-4">
      Stories and interviews
      </p>
      <div className="w-[97%] md:w-[740px] sm:text-center">
      <Pargraph
        largText={true}
        par="Subscribe to learn about new product features, the latest in technology, solutions, and updates."
      />
      </div>
      <form className="pt-10 flex items-center justify-start flex-wrap gap-4">
        <input className="rounded-lg border h-12 w-full max-w-[326px] sm:w-[360px] ps-4" placeholder="Enter your email" />
        <button className="rounded-lg h-12 w-[118px] bg-indigo-850 text-white">Subscribe</button>
      </form>
      <p className="text-gray-obacity dark:text-gray-dark md:text-sm font-normal pt-2">
        We care about your data in our<Link to="##" className="underline"> privacy policy</Link>
      </p>
    </div>
    </div>
  );
}
