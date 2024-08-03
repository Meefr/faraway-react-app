export default function Footer({items}){
    const calcPackedItems = () => {
      let count = 0;
      items.forEach((item) => {
        if (item.status) count++;
      });
      console.log(count);
      return count;
    };
    return (
      <>
        <div className="fixed-bottom text-center py-3 bg-rare">
          {items.length > 0 ? (
            <p className="m-0">
              You have {items.length} &#128188; on your list, and you already
              packed {calcPackedItems()}{" "}
              {parseInt((calcPackedItems() / items.length) * 100)}%
            </p>
          ) : (
            <p className="m-0">
              Start adding some items to your packing list &#128640;
            </p>
          )}
        </div>
      </>
    );
}