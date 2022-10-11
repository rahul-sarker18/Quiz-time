import React from "react";
import { Link } from "react-router-dom";

const QzItem = ({ item }) => {
  //   console.log(item);
  const { logo, name, id } = item;
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100 mt-5">
        <img
          src={logo}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          </div>
          <Link to={`/item/${id}`}>
            <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QzItem;
