import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";
import img1 from "./assets/images/pexels-apasaric-1285625.jpg";
import img2 from "./assets/images/pexels-david-bartus-43782-1166209.jpg";
import img3 from "./assets/images/pexels-fotios-photos-1107717.jpg";
import img4 from "./assets/images/pexels-pixabay-462162.jpg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="" />

        <span className="guide">
          <button className="guide-button">
            <h3>
              <h3>Thing</h3>
            </h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>

          <button className="guide-button">
            <h3>Thing</h3>
          </button>
        </span>

        <span className="sign-in-options">
          <button className="log-in">
            <h3>Log in</h3>
          </button>
          <button className="sign-up">
            <h3>Sign up</h3>
          </button>
        </span>
      </header>

      <main>
        <div className="introduction">
          <span className="intro-groups">
            <h1>Plan. Organize. Go.</h1>
            <p>
              Transform your travel dreams into reality. Start your next
              adventure with TripMosaic today!
            </p>
            <div className="img-holder">
              <img src={img1} alt="" className="trip-images" />
            </div>
          </span>

          <span className="intro-groups">
            <h1>Seamless Itineraries</h1>
            <p>Create, customize, and manage your trips effortlessly.</p>
            <div className="img-holder">
              <img src={img2} alt="" className="trip-images" />
            </div>
          </span>

          <span className="intro-groups">
            <h1>Smart Suggestions</h1>
            <p>
              Discover recommended activities, accommodations, and dining spots
              tailored to your preferences.
            </p>
            <div className="img-holder">
              <img src={img3} alt="" className="trip-images" />
            </div>
          </span>

          <span className="intro-groups">
            <h1>Collaborate</h1>
            <p>Share your plans with friends and family in real time.</p>
            <div className="img-holder">
              <img src={img4} alt="" className="trip-images" />
            </div>
          </span>
        </div>

        <div className="about-us">
          <h1>About Us</h1>
          <span>
            <h2>Turning Travel Chaos into Organized Bliss</h2>
            <p>
              At TripMosaic, we believe that planning a trip should be as
              exciting as the journey itself. We’re here to simplify the
              process, making it easy, fun, and visually stunning to organize
              every detail of your adventure. Whether you’re a solo traveler, a
              family on vacation, or a group of friends exploring the world,
              TripMosaic helps you craft the perfect itinerary, so you can focus
              on making memories instead of managing logistics.
            </p>
          </span>

          <span>
            <h2>Our Mission</h2>
            <p>
              To empower travelers with innovative tools that make trip planning
              stress-free and collaborative while inspiring exploration of the
              world’s endless possibilities.
            </p>
          </span>

          <span>
            <h2>Why We Built TripMosaic</h2>
            <p>
              We’re passionate travelers who’ve experienced the struggles of
              juggling multiple spreadsheets, emails, and maps while planning
              trips. TripMosaic was born to solve these problems, creating a
              single, beautiful platform where your entire journey comes
              together.
            </p>
          </span>

          <span>
            <h2>Our Values</h2>
            <ul>
              <li>
                <p>
                  Simplicity: Making travel planning intuitive and hassle-free.
                </p>
              </li>
              <li>
                <p>
                  Creativity: Bringing your trips to life with unique, colorful
                  tools.
                </p>
              </li>
              <li>
                <p>
                  Community: Encouraging collaboration and shared adventures.
                </p>
              </li>
              <li>
                <p>
                  Exploration: Inspiring people to discover the beauty of our
                  world.
                </p>
              </li>
            </ul>
          </span>
        </div>

        <div className="join">
          <h1>Join the TripMosaic Community</h1>

          <span>
            <h2>Start Turning Your Travel Dreams into Reality</h2>
            <p>
              Join thousands of travelers who trust TripMosaic to make planning
              seamless, enjoyable, and stress-free. From quick weekend getaways
              to epic global adventures, we’re here to help you create the
              perfect travel experience.
            </p>
          </span>

          <span>
            <h2>Why Join TripMosaic?</h2>
            <ul>
              <li>
                All-in-One Planning: Streamline your travel plans with
                beautifully designed itineraries.
              </li>
              <li>
                Collaborative Features: Plan trips with friends and family in
                real-time.
              </li>
              <li>
                Personalized Suggestions: Discover tailored recommendations for
                activities, accommodations, and dining.
              </li>
              <li>
                On-the-Go Access: Keep your itinerary at your fingertips, even
                offline.
              </li>
            </ul>
          </span>

          <span>
            <h2>Your Journey Starts Here</h2>
            <ol>
              <li>
                Create Your Free Account: Sign up and start exploring our
                essential features.
              </li>
              <li>
                Build Your Itinerary: Organize your plans into a stunning mosaic
                layout.
              </li>
              <li>
                Share and Collaborate: Invite travel companions to join your
                plan and contribute.
              </li>
            </ol>
          </span>

          <span>
            <h2>Exclusive Member Benefits</h2>
            <ul>
              <li>
                Free and Premium Plans: Choose the features that suit your
                travel style
              </li>
              <li>
                Travel Insights: Access expert tips and curated recommendations
              </li>
              <li>
                Community Perks: Enjoy exclusive deals and offers for members
              </li>
            </ul>
          </span>
        </div>
      </main>

      <footer>
        <span>
          <h3>Discover</h3>
          <p>Home</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>About Us</p>
        </span>

        <span>
          <h3>Support</h3>
          <p>FAQ</p>
          <p>Help Center</p>
          <p>Contact Us</p>
        </span>

        <span>
          <h3>Contact Info</h3>
          <p>support@tripmosaic.com</p>
          <p>+1 (800) 555-TRIP</p>
          <p>123 Travel Lane, Wanderlust City, USA</p>
        </span>
        
        <span>
          <img src={logo} className="logo" alt="" />© 2024 TripMosaic. All
          Rights Reserved.
        </span>
      </footer>
    </>
  );
}

export default App;
