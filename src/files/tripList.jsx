import { useState } from "react";
import AlertMessage from "./alertMessage";
import { saveData, SwalMessage } from "./utilities";

export default function TripList({ items, setItems }) {
  const deleteItem = (index) => {
    SwalMessage(
      "Delete",
      `are you sure you want to delete ${items[index].name}?`,
      "warning",
      0
    ).then((result) => {
      if (result) {
        const tempItems = [...items];
        tempItems.splice(index, 1);
        setItems(tempItems);
        saveData(tempItems);
      }
    });
  };
   const handleCheckboxChange = (index) => (event) => {
     const tempItems = [...items];
     tempItems[index].state = event.target.checked; // Update the state based on the checkbox
     setItems(tempItems); // Update the state with the new items array
     saveData(tempItems); // Save the updated array to localStorage
   };
  return (
    <>
      {items.length > 0 ? (
        <div className="d-flex overflow-auto bg-main gap-4 py-4 my-4 w-100 m-auto justify-content-start">
          {items.map((item, index) => (
            <div className="d-flex gap-2 justify-content-center align-items-center p-2 flex-nowrap item-width">
              <input
                type="checkbox"
                id={item.name}
                name={item.name}
                defaultValue="Bike"
                checked={item.state}
                onChange={handleCheckboxChange(index)}
              />
              <p
                className={
                  item.state ? "text-decoration-line-through m-0" : "m-0"
                }
              >
                {item.amount} | {item.name}
              </p>
              <i
                class="fa-solid fa-xmark text-danger cursor-pointer"
                onClick={() => {
                  deleteItem(index);
                }}
              ></i>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-4 w-50 m-auto justify-content-start">
          {" "}
          <AlertMessage text={"Nothing more to add !"} />
        </div>
      )}
    </>
  );
}
