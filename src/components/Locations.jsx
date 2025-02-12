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
        <div className="mx-auto box-content max-w-desktop px-8 py-[72px]">
          <div className="relative mx-auto mb-[72px] w-fit">
            <picture>
              <source media="(min-width: 1280px)" srcSet={worldMapDesktop} />
              <source media="(min-width: 768px)" srcSet={worldMapTablet} />
              <img src={worldMapMobile} className="" alt="World Map" />
            </picture>
            <ul className="mx-auto mt-10 max-w-80 space-y-4 md:mt-0 md:space-y-0">
              <div className="bg-lightYellow p-[22px] md:absolute md:left-[14%] md:top-[15%] md:h-8 md:w-[120px] md:bg-yellow md:p-0">
                <li className="text-center font-mono text-h4 font-bold text-darkNavy md:text-[0.8rem]/8">
                  New York
                </li>
                <div className="absolute -bottom-2 left-[52px] hidden h-0 w-0 border-x-8 border-t-8 border-solid border-yellow border-x-transparent md:block"></div>
              </div>
              <div className="bg-lightYellow p-[22px] md:absolute md:left-[35.5%] md:top-[7%] md:h-8 md:w-[120px] md:bg-yellow md:p-0">
                <li className="text-center font-mono text-h4 font-bold text-darkNavy md:text-[0.8rem]/8">
                  London
                </li>
                <div className="absolute -bottom-2 left-[52px] hidden h-0 w-0 border-x-8 border-t-8 border-solid border-yellow border-x-transparent md:block"></div>
              </div>
              <div className="bg-lightYellow p-[22px] md:absolute md:left-[69%] md:top-[49%] md:h-8 md:w-[120px] md:bg-yellow md:p-0">
                <li className="text-center font-mono text-h4 font-bold text-darkNavy md:text-[0.8rem]/8">
                  Jakarta
                </li>
                <div className="absolute -bottom-2 left-[52px] hidden h-0 w-0 border-x-8 border-t-8 border-solid border-yellow border-x-transparent md:block"></div>
              </div>
              <div className="bg-lightYellow p-[22px] md:absolute md:left-[77%] md:top-[20%] md:h-8 md:w-[120px] md:bg-yellow md:p-0">
                <li className="text-center font-mono text-h4 font-bold text-darkNavy md:text-[0.8rem]/8">
                  Yokohama
                </li>
                <div className="absolute -bottom-2 left-[52px] hidden h-0 w-0 border-x-8 border-t-8 border-solid border-yellow border-x-transparent md:block"></div>
              </div>
            </ul>
          </div>
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-center font-mono text-3.5xl font-bold capitalize text-darkNavy">
              Your city not listed?{" "}
            </h2>
            <p className="text-center text-dimGrey">
              If you’d like to see Scoot in your hometown, be sure to let us
              know. We track requests and plan launches based on demand. Feel
              free to message us by clicking the link or messaging us on social.
            </p>
            <button className="button">Message Us</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Locations;
