import Title from "./Title";
import ValuesList from "./ValuesList.jsx";
import heroMobile from "/src/assets/images/careers-locations-hero-mobile.jpg";
import heroTablet from "/src/assets/images/careers-locations-hero-tablet.jpg";
import heroDesktop from "/src/assets/images/careers-locations-hero-desktop.jpg";

function Careers() {
  return (
    <main>
      <Title
        name="Careers"
        imgMobile={heroMobile}
        imgTablet={heroTablet}
        imgDesktop={heroDesktop}
      />
      <section className="mx-auto box-content max-w-desktop px-8 pb-[120px] pt-[72px] md:pt-36 lg:pt-[120px]">
        <div className="flex flex-col items-center justify-between gap-14 md:gap-16 lg:flex-row-reverse">
          <img
            className="w-full max-w-[452px] rounded-full"
            src="/src/assets/images/join-us.jpg"
            alt="Guy standing in a meeting holding a tablet"
          />
          <div className="max-w-[573px] text-center lg:max-w-[445px] lg:text-left">
            <h2 className="mb-8 font-mono text-3.5xl font-bold tracking-tighter text-darkNavy md:mb-10 md:text-5xl lg:mb-6">
              Care to join our mission?
            </h2>
            <p className="mb-8 text-dimGrey md:mb-10">
              We’re always looking for ambitious individuals to help us on our
              journey. If you’re passionate about our mission to provide clean,
              accessible transport to improve urban living we want to hear from
              you!
            </p>
            <button className="button">Say Hello</button>
          </div>
        </div>
      </section>

      <section className="mx-auto box-content max-w-desktop px-8 pb-[145px] md:pb-[120px]">
        <h2 className="mb-16 font-mono text-3.5xl font-bold tracking-tighter text-darkNavy md:mb-[50px] md:text-5xl lg:mb-12 text-center">
          Why join us?
        </h2>
        <ValuesList />
      </section>

      <section>
        <ul>
          <li>
            <div>
              <p></p>
              <p></p>
            </div>
            <button> </button>
          </li>
          <li>
            <div>
              <p></p>
              <p></p>
            </div>
            <button> </button>
          </li>
          <li>
            <div>
              <p></p>
              <p></p>
            </div>
            <button> </button>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Careers;
