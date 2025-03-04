import Title from "./Title";
import ValuesList from "./ValuesList.jsx";
import heroMobile from "/src/assets/images/careers-locations-hero-mobile.jpg";
import heroTablet from "/src/assets/images/careers-locations-hero-tablet.jpg";
import heroDesktop from "/src/assets/images/careers-locations-hero-desktop.jpg";
import joinUs from "/src/assets/images/join-us.jpg";
import leftDownwardArrow from "/src/assets/patterns/left-downward-arrow.svg";
import circle from "/src/assets/patterns/circle.svg";

const careerPostings = [
  { job: "General Manager", location: "Jakarta, Indonesia" },
  { job: "UI/UX Designer", location: "Yokohama, Japan" },
  { job: "Blog Content Copywriter", location: "New York, United States" },
  { job: "Graphic Designer", location: "New York, United States" },
  { job: "Fleet Supervisor", location: "Jakarta, Indonesia" },
  { job: "UX Analyst", location: "London, United Kingdom" },
];

function Careers() {
  return (
    <main className="overflow-x-clip">
      <Title
        name="Careers"
        imgMobile={heroMobile}
        imgTablet={heroTablet}
        imgDesktop={heroDesktop}
      />
      <section className="mx-auto box-content max-w-desktop px-8 pb-[120px] pt-[72px] md:pt-36 lg:pt-[120px]">
        <div className="flex flex-col items-center justify-between gap-14 md:gap-16 lg:flex-row-reverse">
          <div className="relative max-w-fit max-lg:mx-auto">
            <img
              className="w-full max-w-[452px] rounded-full"
              src={joinUs}
              alt="Guy standing in a meeting holding a tablet"
            />
            <img
              className="absolute bottom-0 z-10 max-w-none max-[370px]:max-w-96 lg:-left-32"
              src={leftDownwardArrow}
              alt=""
            />
            <img
              className="absolute bottom-0 left-full z-0 ml-16 hidden max-w-none md:block"
              src={circle}
              alt=""
            />
          </div>
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
        <h2 className="mb-16 text-center font-mono text-3.5xl font-bold tracking-tighter text-darkNavy md:mb-[50px] md:text-5xl lg:mb-12">
          Why join us?
        </h2>
        <ValuesList />
      </section>

      <section className="mx-auto box-content max-w-desktop px-8 pb-[120px]">
        <ul className="space-y-4 lg:space-y-6">
          {careerPostings.map(({ job, location }, i) => (
            <CareerPosting job={job} location={location} key={`posting-${i}`} />
          ))}
        </ul>
      </section>
    </main>
  );
}

function CareerPosting({ job, location }) {
  return (
    <div className="flex flex-col place-items-center gap-4 bg-lightGrey p-8 pt-9 md:flex-row md:justify-between md:px-12 md:py-[33px] lg:pl-10 lg:pr-16">
      <div className="space-y-1 text-center text-darkNavy md:text-left">
        <p className="font-mono text-lg/6 font-bold">{job}</p>
        <p>{location}</p>
      </div>
      <button className="button w-full max-w-80 md:w-[180px]">Apply</button>
    </div>
  );
}

export default Careers;
