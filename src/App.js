import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import BeachCard from "./components/BeachCard/BeachCard";
import SideMenu from "./components/SideMenu/SideMenu";
import "./assets/css/style.css";
import data from "./data.json";

function App() {
  const [beachData, setBeachData] = useState(data);
  const [sortSelected, setSortSelected] = useState("");

  const handleSort = (sortType) => {
    if (sortType === "alphabetically") {
      const sortData = [...beachData.sort((a, b) => sorting(a, b))];
      setBeachData(sortData);
      setSortSelected("alphabetic");
    }
    if (sortType === "price") {
      const sortData = [...beachData.sort((a, b) => a.price - b.price)];
      setBeachData(sortData);
      setSortSelected("price");
    }
    if (sortType === "rating") {
      const sortData = [...beachData.sort((a, b) => a.rating - b.rating)];
      setBeachData(sortData);
      setSortSelected("rating");
    }
  };

  const sorting = (a, b) => {
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  };

  return (
    <div className="container">
      <div className="main">
        <SideMenu handleSort={handleSort} sortSelected={sortSelected} />
        <section className="beach">
          {beachData.map((beach) => (
            <BeachCard key={beach.id} details={beach} />
          ))}
        </section>
      </div>
    </div>
  );
}

export default App;
