import { useState } from "react";
import StarRatings from "react-star-ratings";

const BeachCard = ({ details }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="beach__card">
      <div className="beach__card_top">
        <div className="beach__card_top--img">
          <img src={require(`../../assets/images/${details.imgURL}`)} alt="" />
        </div>
        <div className="beach__card_top--desc">
          <div className="title blue">
            <em>{details.title}</em>
          </div>
          <div className="location light">{details.location}</div>
          <div className="stars">
            <StarRatings
              rating={details.rating}
              numberOfStars={5}
              starRatedColor="#fddd05"
              starDimension="15px"
              starSpacing="3px"
            />
          </div>
          <div className="capacity small-text">
            {details.capacity.adults} Adults, {details.capacity.children}{" "}
            children & {details.capacity.infant} infants
          </div>
          <div className="date small-text">
            <em>{details.dateAvailable}</em> for <em>{details.duration}</em>
          </div>
          <div className="departing small-text">
            departing from <em>{details.departure}</em>
          </div>
          <div className="btn">
            <span>Book now</span>
            <span>&#163;{details.price}</span>
          </div>
        </div>
        <div
          className="readmore blue toggle small-text noselect"
          onClick={toggleCollapse}
        >
          <em>{isCollapsed ? "Read more" : "Read less"}</em> about this hotel
        </div>
      </div>
      {!isCollapsed && (
        <div className="beach__card-bottom">
          <div className="overview blue">
            <em>Overview</em>
          </div>
          <div className="description">{details.overview}</div>
        </div>
      )}
    </div>
  );
};

export default BeachCard;
