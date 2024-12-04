import React from "react";
import SingleItem from "../SingleItems/SingleItem.jsx";

export default function ListItems({ productList,deleteItem,editItem }) {
  
  return (
    <div className=" mt-4">
      {productList.map((product) => {
        return (
          <SingleItem
            key={product.id}
            id={product.id}
            isCompleted={product.isCompleted}
            item={product.item}
            deleteItem={deleteItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
}
