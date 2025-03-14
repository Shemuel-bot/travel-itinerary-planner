import Paris from "../assets/images/Paris.jpg";
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
            <img src="/images/destinations/destinations2.jpg" alt="" />
            <img src="/images/destinations/destinations3.jpg" alt="" />
            <img src="/images/destinations/destinations4.jpg" alt="" />
            <img src="/images/destinations/destinations5.jpg" alt="" />
            <img src="/images/destinations/destinations6.jpg" alt="" />
        </span>
      </div>
    </div>
  );
}

export default Destinations;
