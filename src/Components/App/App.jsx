import { useState } from "react";
import "./App.css";
import AddForm from "../AddForm/AddForm";
import { nanoid } from "nanoid";
import ListItems from "../ListItems/ListItems";
import { ToastContainer, toast, Bounce } from "react-toastify";

const defaultList = JSON.parse(localStorage.getItem("List") || "[]");
const setLocalStorage = (items) => {
  localStorage.setItem("List", JSON.stringify(items));
};

function App() {
  const [productList, setProductList] = useState(defaultList);

  const addItem = (AddedItem) => {
    const newItem = {
      item: AddedItem,
      isCompleted: false,
      id: nanoid(),
    };
    const newList = [...productList, newItem];
    setProductList(newList);
    setLocalStorage(newList);
    toast.success("new item was added!", {
      position: "top-center",
      autoClose: 5000,
      icon: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const deleteItem = (itemID) => {
    const remainingItems = productList.filter(
      (product) => product.id !== itemID
    );
    console.log(remainingItems);
    setProductList(remainingItems);
    setLocalStorage(remainingItems);
    toast.success("item was deleted successfully!", {
      position: "top-center",
      autoClose: 5000,
      icon: true,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const editItem = (itemID) => {
    const newItems = productList.map((product) => {
      if (product.id === itemID) {
        const newItem = { ...product, isCompleted: !product.isCompleted };
        return newItem;
      }
      return product;
    });
    setProductList(newItems);
    setLocalStorage(newItems);
  };
  return (
    <>
      <section className="bg-white xs:w-full xl:w-5/12  mt-12 px-7 pb-12 rounded-md hover:shadow-xl">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          icon={true}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
        <AddForm addItem={addItem} />
        <ListItems
          productList={productList}
          deleteItem={deleteItem}
          editItem={editItem}
        />
      </section>
    </>
  );
}

export default App;
