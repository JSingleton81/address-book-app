import { useEffect, useState } from "react";
import './App.css';
import AddressCard from "./Components/AddressCard";

function App() {
  const [listOfAddresses, setListOfAddresses] = useState([]);

  useEffect(() => {
    fetch(
      "https://randomuser.me/api?results=25"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setListOfAddresses(data.results);
      });
  }, []);

  if (listOfAddresses.length === 0) {
    return <h2>Loading...</h2>;
  }



  return (
    <div className="App">
     <h1>List of Addresses:</h1>
      {listOfAddresses.map((address, index) => (
        <AddressCard key={index} address={address} />
      ))} 
    </div>
  );
}

export default App;
