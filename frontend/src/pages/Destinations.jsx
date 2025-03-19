import Paris from "../assets/images/Locations/Paris.jpg";
import Berlin from "../assets/images/Locations/Berlin.jpg";
import Tokyo from "../assets/images/Locations/Tokyo.jpg";
import Shanghai from "../assets/images/Locations/Shanghai.jpg";
import NewYork from "../assets/images/Locations/New York.jpg";
import Norway from "../assets/images/Locations/Norway.jpg";

import flower from "../assets/images/Icons/flower.png";
import sun from "../assets/images/Icons/sun.png";
import snowflake from "../assets/images/Icons/snowflake.png";
import leaf from "../assets/images/Icons/leaf.png";
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

      <div className="by-seasons">
        <h1>Seasonal</h1>
        <span className="seasons">
          <span className="season-widget">
            <img src={flower} alt="" />
            <h2>Spring</h2>
          </span>
          <span className="season-widget">
            <img src={sun} alt="" />
            <h2>Summer</h2>
          </span>
          <span className="season-widget">
            <img src={leaf} alt="" />
            <h2>Fall</h2>
          </span>
          <span className="season-widget">
            <img src={snowflake} alt="" />
            <h2>Winter</h2>
          </span>
        </span>
      </div>
    </div>
  );
}

export default Destinations;
