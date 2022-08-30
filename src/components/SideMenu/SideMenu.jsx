import "./SideMenu.css";
import sorticon from "../../assets/images/from-a-to-z.png";
import pounds from "../../assets/images/pound.png";
import starempty from "../../assets/images/star-empty.png";

const SideMenu = ({ handleSort, sortSelected }) => {
  return (
    <div className="sidemenu">
      <div
        className={`sidemenu__item ${
          sortSelected === "alphabetic" ? "sidemenu__item-selected" : null
        }`}
        onClick={() => handleSort("alphabetically")}
      >
        <span>
          sort <em>alphabetically</em>
        </span>
        <span>
          <img src={sorticon} alt="sort" />
        </span>
      </div>
      <div
        className={`sidemenu__item ${
          sortSelected === "price" ? "sidemenu__item-selected" : null
        }`}
        onClick={() => handleSort("price")}
      >
        <span>
          sort by <em>price</em>
        </span>
        <span>
          <img src={pounds} alt="pounds" />
        </span>
      </div>
      <div
        className={`sidemenu__item ${
          sortSelected === "rating" ? "sidemenu__item-selected" : null
        }`}
        onClick={() => handleSort("rating")}
      >
        <span>
          sort by <em>price rating</em>
        </span>
        <span>
          <img src={starempty} alt="star" />
        </span>
      </div>
    </div>
  );
};

export default SideMenu;
