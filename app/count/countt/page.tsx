"use client";
import React from "react";
import { useState } from "react";

function page() {
  const [increment, setincrement] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-serif font-bold rounded-full text-lg  bg-gradient-to-r from-purple-600 via-blue-600 to-orange-400">
        current State {increment}{" "}
      </h1>

      <button
        onClick={() => {
          setincrement(increment + 1);
        }}
        className="hover:bg-yellow-500 hover:text-purple-100 transition bg-blue-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap"
      >
        Add
      </button>
      <button
        onClick={() => {
          setincrement(increment - 1);
        }}
        className="hover:bg-purple-500 hover:text-purple-100 transition bg-blue-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap"
      >
        delete
      </button>
      <button
        onClick={() => {
          setincrement(0);
        }}
        className="hover:bg-red-500 hover:text-purple-100 transition bg-blue-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap"
      >
        reset
      </button>
    </div>
  );
}

export default page;
