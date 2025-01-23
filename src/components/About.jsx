import digitalEra from "/src/assets/images/digital-era.jpg";
import betterLiving from "/src/assets/images/better-living.jpg";
import aboutHeroMobile from "/src/assets/images/about-hero-mobile.jpg";
import aboutHeroTablet from "/src/assets/images/about-hero-tablet.jpg";
import aboutHeroDesktop from "/src/assets/images/about-hero-desktop.jpg";
import whiteCircles from "/src/assets/patterns/white-circles.svg";
import ourTech from "/src/assets/images/our-tech.jpg";
import ourIntegrity from "/src/assets/images/our-integrity.jpg";
import ourCommunity from "/src/assets/images/our-community.jpg";

function About() {
  return (
    <>
      <header className="relative z-0 overflow-clip bg-darkNavy px-[97px] py-[60px] md:py-[72px]">
        <h1 className="mx-auto max-w-desktop text-center font-mono text-h3 font-bold tracking-tighter text-white md:text-left md:text-h1">
          About
        </h1>
        <picture>
          <source media="(min-width: 1024px)" srcSet={aboutHeroDesktop} />
          <source media="(min-width: 640px)" srcSet={aboutHeroTablet} />
          <img
            src={aboutHeroMobile}
            className="absolute bottom-0 left-0 top-0 -z-10 min-h-full w-full"
            alt=""
          />
        </picture>
        <img
          src={whiteCircles}
          className="invisible absolute right-[-31px] top-[69px] w-fit md:visible"
        />
      </header>

      <main className="px-8">
        <section className="mx-auto mb-29 mt-[72px] max-w-desktop md:mt-36 lg:mt-29">
          <article className="mb-29 lg:flex lg:items-center lg:justify-between odd:lg:flex-row-reverse">
            <img
              className="mx-auto mb-14 rounded-full lg:m-0"
              src={digitalEra}
              alt="Somebody scrolling on a cellphone"
            />
            <div className="mx-auto max-w-[573px] lg:mx-0 lg:max-w-[445px]">
              <h2 className="mx-auto mb-8 max-w-[457px] text-center font-mono text-3.5xl/none font-bold tracking-tighter text-darkNavy md:mb-10 md:text-5xl lg:mb-6 lg:text-left">
                Mobility for the digital era
              </h2>
              <p className="text-center text-dimGrey lg:text-left">
                Getting around should be simple (and even fun!) for everyone. We
                embrace technology to provide low cost, smart access to scooters
                at your fingertips.
              </p>
            </div>
          </article>
          <article className="mb-29 lg:flex lg:items-center lg:justify-between odd:lg:flex-row-reverse">
            <img
              className="mx-auto mb-14 rounded-full lg:m-0"
              src={betterLiving}
              alt="Yellow bus speeding in a gray city"
            />
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
          <ul className="flex flex-col gap-14 lg:flex-row lg:gap-[30px]">
            <li className="mx-auto max-w-[457px] lg:basis-1/3">
              <div className="relative mb-4 pb-12 md:mb-8">
                <img
                  src={ourTech}
                  alt="Someone holding a cellphone"
                  className="mx-auto rounded-full"
                />
                <div className="absolute bottom-0 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-yellow font-mono text-2xl/7 font-bold tracking-tighter text-darkNavy">
                  01
                </div>
              </div>
              <h3 className="mb-[27px] font-mono text-2xl/7 font-bold tracking-tighter text-darkNavy">
                Our tech
              </h3>
              <p className="text-dimGrey">
                We’re using cutting edge technology to drive accessible urban
                transportation forward. Our fully electric scooters are a joy to
                ride!
              </p>
            </li>
            <li className="mx-auto max-w-[457px] lg:basis-1/3">
              <div className="relative mb-4 pb-12 md:mb-8">
                <img
                  src={ourIntegrity}
                  alt="Someone driving a yellow motorcycle"
                  className="mx-auto rounded-full"
                />
                <div className="absolute bottom-0 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-yellow">
                  02
                </div>
              </div>
              <h3 className="mb-[27px] font-mono text-2xl/7 font-bold tracking-tighter text-darkNavy">
                Our integrity
              </h3>
              <p className="text-dimGrey">
                We are fully committed to deliver a great yet safe, sustainable
                micro-mobility experience in every city we serve.
              </p>
            </li>
            <li className="mx-auto max-w-[457px] lg:basis-1/3">
              <div className="relative mb-4 pb-12 md:mb-8">
                <img
                  src={ourCommunity}
                  alt="A group of people crossing the street"
                  className="mx-auto rounded-full"
                />
                <div className="absolute bottom-0 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-yellow">
                  03
                </div>
              </div>
              <h3 className="mb-[27px] font-mono text-2xl/7 font-bold tracking-tighter text-darkNavy">
                Our community
              </h3>
              <p className="text-dimGrey">
                We support every community we serve. All workers are paid a
                living wage based on their location and are Scoot employees.
              </p>
            </li>
          </ul>
        </section>
        <section className="text-darkNavy">
          <h2 className="mb-12 text-center font-mono text-3.5xl/none font-bold md:mb-16 md:text-5xl">
            FAQs
          </h2>
          <article>
            <h3 className="mb-8 text-center font-mono text-2xl/7 font-bold">
              How it works
            </h3>
            <div className="space-y-4">
              <details className="group bg-lightGrey p-8 pr-7">
                <summary className="font-mono font-bold group-open:mb-6">
                  How do I download the app?
                </summary>
                To download the Scoot app, you can search “Scoot” in both the
                App and Google Play stores. An even simpler way to do it would
                be to click the relevant link at the bottom of this page and
                you’ll be re-directed to the correct page.
              </details>
              <details>
                <summary>Can I find a nearby Scoots?</summary>
                Definitely! Simply open up the app and allow us to find your
                location while using it. We&apos;ll show you all of the closest
                Scoots and some extra useful information.
              </details>
              <details>
                <summary>Do I need a license to ride?</summary>
                Yup! We provide information inside the app regarding local laws
                and the license you need to be able to ride our Scoots.
              </details>
            </div>
          </article>

          <article>
            <h3>Safe driving</h3>
            <div>
              <details>
                <summary> Should I wear a helmet?</summary>
                Yes, please do! All cities have different laws. But we strongly
                strongly strongly recommend always wearing a helmet regardless
                of the local laws. We like you and we want you to be as safe as
                possible while Scooting.
              </details>
              <details>
                <summary>How about the rules & regulations?</summary>
                Now is not the time to be a rule breaker. Be sure you&apos;re
                complying with all local laws and regulations. Also, just be a
                good human being. Be sure not to park your Scoot where it can
                block access to buildings or get in people&apos;s way.
              </details>
              <details>
                <summary>What if I damage my Scoot?</summary>
                Be sure to read our terms and conditions carefully. Not the most
                fun job we know but we make it as clear as possible.
                There&apos;s an option to add insurance for each trip, or you
                can sign up for annual insurance if you&apos;re a regular
                Scooter.
              </details>
            </div>
          </article>
        </section>
      </main>
    </>
  );
}

export default About;
