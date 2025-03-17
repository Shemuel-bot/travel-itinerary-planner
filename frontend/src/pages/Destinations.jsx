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
          <span className="image-widget">
            <img src={Paris} alt="" />
            <h2>Paris</h2>
          </span>
          <span className="image-widget">
            <img src={Berlin} alt="" />
            <h2>Berlin</h2>
          </span>
          <span className="image-widget">
            <img src={Tokyo} alt="" />
            <h2>Tokyo</h2>
          </span>
          <span className="image-widget">
            <img src={Shanghai} alt="" />
            <h2>Shanghai</h2>
          </span>
          <span className="image-widget">
            <img src={NewYork} alt="" />
            <h2>New York</h2>
          </span>
          <span className="image-widget">
            <img src={Norway} alt="" />
            <h2>Norway</h2>
          </span>
        </span>
      </div>

      <div className="by-category">
        <h1>By Category</h1>
        <span className="categories">
          <h2>Beach</h2>
          <h2>City</h2>
          <h2>Adventure</h2>
          <h2>Luxury</h2>
          <h2>Foodie</h2>
          <h2>Budget-friendly</h2>
        </span>
      </div>
    </div>
  );
}

export default Destinations;
