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
        <div className="max-w-desktop mx-auto box-content px-8 py-[72px]">
          <div className="pb-[72px]">
            <picture>
              <source media="(min-width: 1024px)" srcSet={worldMapDesktop} />
              <source media="(min-width: 640px)" srcSet={worldMapTablet} />
              <img src={worldMapMobile} className="" alt="World Map" />
            </picture>
            <ul className="mt-10 space-y-4">
              <li className="bg-lightYellow text-center text-darkNavy font-mono text-h4 font-bold p-[22px]">New York </li>
              <li className="bg-lightYellow text-center text-darkNavy font-mono text-h4 font-bold p-[22px]">London </li>
              <li className="bg-lightYellow text-center text-darkNavy font-mono text-h4 font-bold p-[22px]">Jakarta </li>
              <li className="bg-lightYellow text-center text-darkNavy font-mono text-h4 font-bold p-[22px]">Yokohama </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <h2 className="text-3.5xl font-mono font-bold text-darkNavy capitalize text-center ">Your city not listed? </h2>
            <p className="text-dimGrey text-center ">
              If you’d like to see Scoot in your hometown, be sure to let us know.
              We track requests and plan launches based on demand. Feel free to
              message us by clicking the link or messaging us on social.
            </p>
            <button className="button">Message Us</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Locations;
