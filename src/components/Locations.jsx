import Title from "./Title";
import heroMobile from "/src/assets/images/careers-locations-hero-mobile.jpg";
import heroTablet from "/src/assets/images/careers-locations-hero-tablet.jpg";
import heroDesktop from "/src/assets/images/careers-locations-hero-desktop.jpg";
import worldMapMobile from "/src/assets/images/world-map-mobile.png";
import worldMapTablet from "/src/assets/images/world-map-tablet.png";
import worldMapDesktop from "/src/assets/images/world-map-desktop.png";

function Locations() {
  return (
    <>
      <main>
        <Title
          name="Locations"
          imgMobile={heroMobile}
          imgTablet={heroTablet}
          imgDesktop={heroDesktop}
        />
        <picture>
          <source media="(min-width: 1024px)" srcSet={worldMapDesktop} />
          <source media="(min-width: 640px)" srcSet={worldMapTablet} />
          <img src={worldMapMobile} className="" alt="World Map" />
          <ul>
            <li>New York </li>
            <li>London </li>
            <li>Jakarta </li>
            <li>Yokohama </li>
          </ul>
        </picture>
        <div>
          <h2>Your city not listed? </h2>
          <p>
            If you’d like to see Scoot in your hometown, be sure to let us know.
            We track requests and plan launches based on demand. Feel free to
            message us by clicking the link or messaging us on social.
          </p>
          <button>Message Us</button>
        </div>
      </main>
    </>
  );
}

export default Locations;
