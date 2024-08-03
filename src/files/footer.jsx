export default function Footer({itemsNumber,packedItemsNumber}){
    
    return (
      <>
        <div className="fixed-bottom text-center py-3 bg-rare">
          {itemsNumber > 0 ? (
            <p className="m-0">
              You have {itemsNumber} &#128188; on your list, and you already
              packed {packedItemsNumber} {(packedItemsNumber / itemsNumber) * 100}%
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