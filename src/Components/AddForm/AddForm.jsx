import ListItems from "../ListItems/ListItems";
import React, { useState } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";


export default function AddForm({addItem}) {
  const [item, setItem] = useState("");
  const handleSubmitItem = (e)=>{
    e.preventDefault();
    if (!item){
      toast.error('you must add an item!', {
        position: "top-center",
        autoClose: 5000,
        icon :true,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
      return;
    } 
    addItem(item)
    setItem("")
  }
  
  return (
    <>
    <div className="w-full">
          <h1 className="text-3xl py-7">Grocery Bud</h1>
          <form className="w-full" onSubmit={handleSubmitItem}>
            <input
              type="text"
              className="border-2 rounded-md border-gray-200 w-9/12 h-11 px-4"
              value={item}
              onChange={(event) => setItem(event.target.value)}
            />
            <button
              type="submit"
              className="w-3/12 xs:px-0.5 sm:px-3 bg-blue-400 text-white font-normal rounded-r-lg -ms-1"
            >
              Add Item
            </button>
          </form>
        </div>
    </>
  );
}
