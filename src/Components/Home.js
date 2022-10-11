import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Myapi } from "../Layout/Layout";
import QzItem from "./QzItem";

const Home = () => {
  const lodeApi = useContext(Myapi);
  const quzemanu = lodeApi.data;
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 my-16">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Ac mattis
              <span className="dark:text-violet-400">senectus</span>erat
              pharetra
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Dictum aliquam porta in condimentum ac integer
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                rel="noopener noreferrer"
                to="/cart"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 shadow-lg shadow-cyan-500/50 "
              >
                Chart
              </Link>
              <Link
                rel="noopener noreferrer"
                to="/blog"
                className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-100 shadow-lg shadow-indigo-500/40 "
              >
                Blog
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={
                "https://datasagar.com/illionso_awesome/2021/12/programming-languages.jpg"
              }
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>

      {/* quiz manu lode */}

      <div>
        <div className="grid xl:grid-cols-4 mx-auto w-5/6 gap-6">
          {quzemanu.map((qz) => (
            <QzItem key={qz.id} item={qz}></QzItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
