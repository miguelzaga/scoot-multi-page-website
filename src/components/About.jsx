import Title from "./Title";
import ValuesList from "./ValuesList.jsx";
import digitalEra from "/src/assets/images/digital-era.jpg";
import betterLiving from "/src/assets/images/better-living.jpg";
import heroMobile from "/src/assets/images/about-hero-mobile.jpg";
import heroTablet from "/src/assets/images/about-hero-tablet.jpg";
import heroDesktop from "/src/assets/images/about-hero-desktop.jpg";
import rightArrow from "/src/assets/patterns/right-arrow.svg";
import leftUpwardArrow from "/src/assets/patterns/left-upward-arrow.svg";
import circle from "/src/assets/patterns/circle.svg";

function About() {
  return (
    <>
      <Title
        name="About"
        imgMobile={heroMobile}
        imgTablet={heroTablet}
        imgDesktop={heroDesktop}
      />
      <main className="overflow-x-clip px-8">
        <section className="mx-auto mb-29 mt-[72px] max-w-desktop md:mt-36 lg:mt-29">
          <article className="mb-29 lg:flex lg:items-center lg:justify-between odd:lg:flex-row-reverse">
            <div className="relative max-w-fit max-lg:mx-auto">
              <img
                className="mx-auto mb-14 rounded-full lg:m-0"
                src={digitalEra}
                alt="Somebody scrolling on a cellphone"
              />
              <img
                className="absolute -left-2 bottom-10 z-10 max-w-none max-[370px]:max-w-96 md:-left-32 lg:max-xl:-left-10"
                src={leftUpwardArrow}
                alt=""
              />
              <img
                className="absolute bottom-0 left-full z-0 ml-16 hidden max-w-none md:block"
                src={circle}
                alt=""
              />
            </div>
            <div className="mx-auto max-w-[573px] lg:mx-0 lg:max-w-[445px]">
              <h2 className="mx-auto mb-8 max-w-[457px] text-center font-mono text-3.5xl/none font-bold tracking-tighter text-darkNavy md:mb-10 md:text-5xl lg:mb-6 lg:text-left">
                Mobility for the digital era
              </h2>
              <p className="z-20 text-center text-dimGrey lg:text-left">
                Getting around should be simple (and even fun!) for everyone. We
                embrace technology to provide low cost, smart access to scooters
                at your fingertips.
              </p>
            </div>
          </article>
          <article className="mb-29 lg:flex lg:items-center lg:justify-between odd:lg:flex-row-reverse">
            <div className="relative max-w-fit max-lg:mx-auto">
              <img
                className="mx-auto mb-14 rounded-full lg:m-0"
                src={betterLiving}
                alt="Yellow bus speeding in a gray city"
              />
              <img
                className="absolute -right-2 top-0 z-10 max-w-none max-[370px]:max-w-80 sm:right-64"
                src={rightArrow}
                alt=""
              />
              <img
                className="absolute bottom-0 right-full z-0 mr-16 hidden max-w-none md:block"
                src={circle}
                alt=""
              />
            </div>
            <div className="mx-auto max-w-[573px] lg:mx-0 lg:max-w-[445px]">
              <h2 className="mx-auto mb-8 max-w-[457px] text-center font-mono text-3.5xl/none font-bold tracking-tighter text-darkNavy md:mb-10 md:text-5xl lg:mb-6 lg:text-left">
                Better urban living
              </h2>
              <p className="text-center text-dimGrey lg:text-left">
                We’re helping connect cities and bring people closer together.
                Our scooters are also fully-electric and we offset the minimal
                carbon footprint for each ride.
              </p>
            </div>
          </article>
        </section>
        <section className="mx-auto mb-[145px] max-w-desktop text-center md:mb-29">
          <h2 className="mb-16 font-mono text-3.5xl/none font-bold tracking-tighter text-darkNavy md:mb-[105px] md:text-5xl lg:mb-[103px]">
            Our values
          </h2>
          <ValuesList />
        </section>
        <section className="mx-auto mb-[120px] max-w-desktop text-darkNavy lg:mb-40">
          <h2 className="mb-12 text-center font-mono text-3.5xl/none font-bold md:mb-16 md:text-5xl">
            FAQs
          </h2>
          <article className="mb-12 md:mb-16 lg:flex lg:gap-x-[30px]">
            <h3 className="mb-8 text-center font-mono text-2xl/7 font-bold md:text-h3 lg:min-w-[350px]">
              How it works
            </h3>
            <div className="basis-full space-y-4 md:space-y-6">
              <details className="group bg-lightGrey">
                <summary className="marker relative cursor-pointer p-8 pr-[60px] font-mono font-bold hover:bg-lightYellow group-open:hover:bg-lightGrey md:pl-10 md:text-2xl/7">
                  How do I download the app?
                </summary>
                <p className="-mt-1 pb-8 pl-8 pr-7 pt-0 md:pl-10 md:pr-8 lg:pr-10">
                  To download the Scoot app, you can search “Scoot” in both the
                  App and Google Play stores. An even simpler way to do it would
                  be to click the relevant link at the bottom of this page and
                  you’ll be re-directed to the correct page.
                </p>
              </details>
              <details className="group bg-lightGrey">
                <summary className="marker relative cursor-pointer p-8 pr-[60px] font-mono font-bold hover:bg-lightYellow group-open:hover:bg-lightGrey md:pl-10 md:text-2xl/7">
                  Can I find a nearby Scoots?
                </summary>
                <p className="-mt-1 pb-8 pl-8 pr-7 pt-0 md:pl-10 md:pr-8 lg:pr-10">
                  Definitely! Simply open up the app and allow us to find your
                  location while using it. We&apos;ll show you all of the
                  closest Scoots and some extra useful information.
                </p>
              </details>
              <details className="group bg-lightGrey">
                <summary className="marker relative cursor-pointer p-8 pr-[60px] font-mono font-bold hover:bg-lightYellow group-open:hover:bg-lightGrey md:pl-10 md:text-2xl/7">
                  Do I need a license to ride?
                </summary>
                <p className="-mt-1 pb-8 pl-8 pr-7 pt-0 md:pl-10 md:pr-8 lg:pr-10">
                  Yup! We provide information inside the app regarding local
                  laws and the license you need to be able to ride our Scoots.
                </p>
              </details>
            </div>
          </article>

          <article className="lg:flex lg:gap-x-[30px]">
            <h3 className="mb-8 text-center font-mono text-2xl/7 font-bold md:text-h3 lg:min-w-[350px]">
              Safe driving
            </h3>
            <div className="basis-full space-y-4 md:space-y-6">
              <details className="group bg-lightGrey">
                <summary className="marker relative cursor-pointer p-8 pr-[60px] font-mono font-bold hover:bg-lightYellow group-open:hover:bg-lightGrey md:pl-10 md:text-2xl/7">
                  Should I wear a helmet?
                </summary>
                <p className="-mt-1 pb-8 pl-8 pr-7 pt-0 md:pl-10 md:pr-8 lg:pr-10">
                  Yes, please do! All cities have different laws. But we
                  strongly strongly strongly recommend always wearing a helmet
                  regardless of the local laws. We like you and we want you to
                  be as safe as possible while Scooting.
                </p>
              </details>
              <details className="group bg-lightGrey">
                <summary className="marker relative cursor-pointer p-8 pr-[60px] font-mono font-bold hover:bg-lightYellow group-open:hover:bg-lightGrey md:pl-10 md:text-2xl/7">
                  How about the rules & regulations?
                </summary>
                <p className="-mt-1 pb-8 pl-8 pr-7 pt-0 md:pl-10 md:pr-8 lg:pr-10">
                  Now is not the time to be a rule breaker. Be sure you&apos;re
                  complying with all local laws and regulations. Also, just be a
                  good human being. Be sure not to park your Scoot where it can
                  block access to buildings or get in people&apos;s way.
                </p>
              </details>
              <details className="group bg-lightGrey">
                <summary className="marker relative cursor-pointer p-8 pr-[60px] font-mono font-bold hover:bg-lightYellow group-open:hover:bg-lightGrey md:pl-10 md:text-2xl/7">
                  What if I damage my Scoot?
                </summary>
                <p className="-mt-1 pb-8 pl-8 pr-7 pt-0 md:pl-10 md:pr-8 lg:pr-10">
                  Be sure to read our terms and conditions carefully. Not the
                  most fun job we know but we make it as clear as possible.
                  There&apos;s an option to add insurance for each trip, or you
                  can sign up for annual insurance if you&apos;re a regular
                  Scooter.
                </p>
              </details>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default About;
