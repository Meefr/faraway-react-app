import './App.css';
import Footer from './files/footer';
import Header from './files/header';
import TripInput from './files/tripInput';
function App() {
  return (
    <>
      <Header />
      <TripInput />
      <Footer itemsNumber={4} packedItemsNumber={4}/>
    </>
  );
}

export default App;
