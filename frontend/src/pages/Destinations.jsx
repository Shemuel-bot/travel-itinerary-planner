import Paris from "../assets/images/Paris.jpg";
import Berlin from "../assets/images/Berlin.jpg";
import Tokyo from "../assets/images/Tokyo.jpg";
import Shanghai from "../assets/images/Shanghai.jpg";
import NewYork from "../assets/images/New York.jpg";
import Norway from "../assets/images/Norway.jpg";
import "../css/destinations.css";

function Destinations() {
  return (
    <div className="destinations">
      <div className="featured-destinations">
        <h1>Find Your Next Adventure</h1>
        <h2>
          Discover the world’s most exciting destinations, curated
          recommendations, and hidden gems to make your trip unforgettable.
        </h2>
        <span className="destination-images">
            <img src={Paris} alt="" />
            <img src={Berlin} alt="" />
            <img src={Tokyo} alt="" />
            <img src={Shanghai} alt="" />
            <img src={NewYork} alt="" />
            <img src={Norway} alt="" />
        </span>
      </div>
    </div>
  );
}

export default Destinations;
