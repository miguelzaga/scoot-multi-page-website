import locate from "/src/assets/icons/locate.svg";
import ride from "/src/assets/icons/ride.svg";
import scooter from "/src/assets/icons/scooter.svg";
import nearYou from "/src/assets/images/near-you.jpg";
import payments from "/src/assets/images/payments.jpg";
import telemetry from "/src/assets/images/telemetry.jpg";

function Home() {
  return (
    <>
      <section className="bg-darkNavy px-8 md:px-10">
        <div className="max-w- mx-auto max-w-[573px] pb-[179px] pt-[115px] text-center text-white md:pb-[217px] md:pt-[137px] lg:max-w-desktop lg:py-[153px] lg:text-left">
          <h1 className="mb-6 font-mono text-h3 font-bold tracking-tighter md:text-h1 lg:mb-10 lg:max-w-lg">
            Scooter sharing made simple
          </h1>
          <p className="mb-[34px] md:mb-8 lg:mb-10 lg:ml-24">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <button className="button lg:ml-24">Get Scootin</button>
        </div>
      </section>
      <section className="bg-white px-8 md:px-10">
        <ul className="mx-auto my-29 flex max-w-[573px] flex-col gap-12 text-center md:mb-36 md:mt-[122px] md:gap-10 md:text-left lg:mb-[200px] lg:mt-40 lg:max-w-desktop lg:flex-row lg:gap-[30px]">
          <li className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-20 lg:flex-col lg:gap-10">
            <img className="max-w-14 md:max-w-24" src={locate} alt="" />
            <div>
              <h2 className="mb-6 font-mono text-xl font-bold tracking-tighter text-darkNavy md:mb-[27px] md:text-h4">
                Locate with app
              </h2>
              <p className="text-dimGrey">
                Use the app to find the nearest scooter to you. We are
                continuously placing scooters in the areas with most demand, so
                one should never be too far away.
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-20 lg:flex-col lg:gap-10">
            <img className="max-w-14 md:max-w-24" src={scooter} alt="" />
            <div>
              <h2 className="mb-6 font-mono text-xl font-bold tracking-tighter text-darkNavy md:mb-[27px] md:text-h4">
                Pick your scooter
              </h2>
              <p className="text-dimGrey">
                We show the most important info for the scooters closest to you.
                So you know how much charge they have left and can see roughly
                how much it will cost.
              </p>
            </div>
          </li>
          <li className="flex flex-col items-center gap-6 md:flex-row md:items-start md:gap-20 lg:flex-col lg:gap-10">
            <img className="max-w-14 md:max-w-24" src={ride} alt="" />
            <div>
              <h2 className="mb-6 font-mono text-xl font-bold tracking-tighter text-darkNavy md:mb-[27px] md:text-h4">
                Enjoy the ride
              </h2>
              <p className="text-dimGrey">
                Scan the QR code and the bike will unlock. Retract the cable
                lock, put on a helmet, and you’re off! Always lock bikes away
                from walkways and accessibility ramps.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className="mx-auto mb-29 space-y-29 bg-white px-8 md:mb-[104px] md:px-10 lg:mb-52">
        <article className="mx-auto text-center lg:flex lg:max-w-desktop lg:justify-between lg:text-left odd:lg:flex-row-reverse">
          <img
            className="mx-auto mb-14 rounded-full lg:m-0"
            src={telemetry}
            alt=""
          />

          <div className="mx-auto flex max-w-[576px] flex-col items-center gap-y-8 md:gap-y-10 lg:mx-0 lg:max-w-[445px] lg:items-start lg:gap-y-6">
            <h2 className="mx-auto max-w-[457px] font-mono text-3.5xl/none font-bold tracking-tighter text-darkNavy md:text-h2 lg:mt-[66px]">
              Easy to use riding telemetry
            </h2>
            <p className="text-dimGrey">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you&apos;ve been using
              the scooter, your traveling distance, and many more things all in
              an easy to use app.
            </p>
            <button className="button lg:mt-4">Learn More</button>
          </div>
        </article>
        <article className="mx-auto text-center lg:flex lg:max-w-desktop lg:justify-between lg:text-left odd:lg:flex-row-reverse">
          <img
            className="mx-auto mb-14 rounded-full lg:m-0"
            src={nearYou}
            alt=""
          />

          <div className="itnterems-ce mx-auto flex max-w-[576px] flex-col gap-y-8 md:gap-y-10 lg:mx-0 lg:max-w-[445px] lg:items-start lg:gap-y-6">
            <h2 className="mx-auto max-w-[457px] font-mono text-3.5xl/none font-bold tracking-tighter text-darkNavy md:text-h2 lg:mt-[66px]">
              Coming to a city near you
            </h2>
            <p className="text-dimGrey">
              Scoot is available in 4 major cities so far. We’re expanding
              rapidly, so be sure to let us know if you want to see us in your
              hometown. We’re aiming to let our scooters loose on 23 cities over
              the coming year.
            </p>
            <button className="button lg:mt-4">Learn More</button>
          </div>
        </article>
        <article className="mx-auto text-center lg:flex lg:max-w-desktop lg:justify-between lg:text-left odd:lg:flex-row-reverse">
          <img
            className="mx-auto mb-14 rounded-full lg:m-0"
            src={payments}
            alt=""
          />

          <div className="mx-auto flex max-w-[576px] flex-col items-center gap-y-8 md:gap-y-10 lg:mx-0 lg:max-w-[445px] lg:items-start lg:gap-y-6">
            <h2 className="mx-auto max-w-[457px] font-mono text-3.5xl/none font-bold tracking-tighter text-darkNavy md:text-h2 lg:mt-[66px]">
              Zero hassle payments
            </h2>
            <p className="text-dimGrey">
              Our payment is as easy as one two three. We accept most credit
              cards and debit cards. You can also link your PayPal account
              inside the app. Need to pay later? No worries! You can defer
              payment for up to a month.
            </p>
            <button className="button"> Learn More</button>
          </div>
        </article>
      </section>
    </>
  );
}

export default Home;
