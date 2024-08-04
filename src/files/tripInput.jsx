import { useState } from "react";
import { saveData } from "./utilities";

export default function TripInput({ items, setItems }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState(1);
  return (
    <>
      <div className="d-flex gap-4 align-items-center p-2 bg-main color-second justify-content-center">
        <p className="m-0">What do you need for your trip</p>
        <div className="d-flex">
          <input
            type="number"
            className="form-control rounded"
            min={1}
            max={100}
            placeholder="amount"
            required
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </div>
        <div className="d-flex">
          <input
            type="text"
            className="form-control rounded"
            placeholder="item"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button
          type="button"
          class="btn custom-btn"
          onClick={() => {
            if (name && amount !== 0) {
              const item = {
                name: name,
                amount: parseInt(amount),
                state: false,
              };
              const updatedItems = [...items,item];
              setItems(updatedItems);
              saveData(updatedItems);
              setName("");
              setAmount(1);
            }
          }}
        >
          Add
        </button>
      </div>
    </>
  );
}
