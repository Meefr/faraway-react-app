import { useState } from "react";
import "./App.css";
import Footer from "./files/footer";
import Header from "./files/header";
import TripInput from "./files/tripInput";
import { initialData } from "./files/utilities";
import TripList from "./files/tripList";
import FooterBtns from "./files/footerBtns";
function App() {
  
  const [items, setItems] = useState(initialData || []);

  return (
    <>
      <Header />
      <TripInput items={items} setItems={setItems} />
      <TripList items={items} setItems={setItems} />
      <div className="fixed-bottom">
        <FooterBtns items={items} setItems={setItems} />
        <Footer items={items} />
      </div>
    </>
  );
}

export default App;
