export default function TripInput() {
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
            defaultValue={1}
          />
        </div>
        <div className="d-flex">
          <input
            type="text"
            className="form-control rounded"
            placeholder="item"
          />
        </div>
        <button type="button" class="btn custom-btn">
          Add
        </button>
      </div>
    </>
  );
}
