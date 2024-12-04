import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
export default function SingleItem({id,isCompleted,item,deleteItem,editItem}) {
console.log(isCompleted);

  return (
    <>
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id={id}
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
            checked={isCompleted}
            onChange={() => editItem(id)}
          />
        </div>
        <div className="ml-3 text-sm">
          <label
            htmlFor={id}
            className="font-medium text-black dark:text-gray-300"
            style={{
              textDecoration: isCompleted && "line-through",
            }}
          >
            {item}
          </label>
        </div>
      </div>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-1 text-center "
        onClick={()=>deleteItem(id)}
      >
        Delete
      </button>
    </div>
    </>
  );
}
