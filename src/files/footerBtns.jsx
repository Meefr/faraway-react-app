import { useState } from "react";
import { loadData, saveData, SwalMessage } from "./utilities";

const sortMethods = Object.freeze({
  m1: "SORT BY PACKED STATUS",
  m2: "SORT BY INPUT ORDER",
  m3: "SORT BY DESCROPTION",
  m4: "SORT BY AMOUNT",
});

const sortFunctions = Object.freeze({
  "SORT BY PACKED STATUS": (list) => {
    console.log(list);

    return list.sort((a, b) => b.state - a.state);
  },
  "SORT BY DESCROPTION": (list) => {
    return list.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  },
  "SORT BY INPUT ORDER": (list) => {
    return loadData();
  },
  "SORT BY AMOUNT": (list) => {
    return list.sort((a, b) => a.amount - b.amount);
  },
});

export default function FooterBtns({ items, setItems }) {
  const [selectedMethod, setSelectedMethod] = useState("SORT METHOD");

  const handleSelection = (method) => {
    let sortedItems = [...items];
    sortedItems = sortFunctions[method](sortedItems);
    setItems(sortedItems);
    setSelectedMethod(method);
  };

  const clearData = ()=>{
    SwalMessage("Delete","Are you sure ?!").then((result)=>{
        if(result){
            setItems([]);
            saveData([]);
        }
    });
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center py-3 gap-2">
        <div class="dropdown">
          <button
            class="btn custom-btn dropdown-toggle color-main"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {selectedMethod}
          </button>
          <ul class="dropdown-menu">
            {Object.values(sortMethods).map((method) => (
              <li key={method}>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSelection(method)}
                >
                  {method}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button className="btn custom-btn" onClick={() => {clearData()}}>
          CLEAR LIST
        </button>
      </div>
    </>
  );
}
