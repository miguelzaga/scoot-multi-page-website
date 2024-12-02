import locate from "/src/assets/icons/locate.svg";
import ride from "/src/assets/icons/ride.svg";
import scooter from "/src/assets/icons/scooter.svg";
import nearYou from "/src/assets/images/near-you.jpg";
import payments from "/src/assets/images/payments.jpg";
import telemetry from "/src/assets/images/telemetry.jpg";

function Home() {
  return (
    <>
      <section className="bg-darkNavy px-8">
        <div className="mx-auto max-w-[573px] pb-[179px] pt-[115px] text-center text-white md:pb-[217px] md:pt-[137px]">
          <h1 className="mb-6 font-mono text-h3 font-bold tracking-tighter md:text-h1">
            Scooter sharing made simple
          </h1>
          <p className="mb-[34px] md:mb-8">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <button className="button">Get Scootin</button>
        </div>
      </section>
      <section className="bg-white px-8">
        <ul className="mx-auto my-29 max-w-[573px] space-y-12 text-center md:mb-36 md:mt-[122px] md:text-left">
          <li className="md:flex md:items-start md:gap-20">
            <img
              className="mx-auto mb-6 max-w-14 md:max-w-24"
              src={locate}
              alt=""
            />
            <div>
              <h2 className="md:mb-[2 mb-6 font-mono text-xl font-bold tracking-tighter text-darkNavy md:text-h4">
                Locate with app
              </h2>
              <p className="text-dimGrey">
                Use the app to find the nearest scooter to you. We are
                continuously placing scooters in the areas with most demand, so
                one should never be too far away.
              </p>
            </div>
          </li>
          <li className="md:flex md:items-start md:gap-20">
            <img
              className="mx-auto mb-6 max-w-14 md:max-w-24"
              src={scooter}
              alt=""
            />
            <div>
              <h2 className="md:mb-[2 mb-6 font-mono text-xl font-bold tracking-tighter text-darkNavy md:text-h4">
                Pick your scooter
              </h2>
              <p className="text-dimGrey">
                We show the most important info for the scooters closest to you.
                So you know how much charge they have left and can see roughly
                how much it will cost.
              </p>
            </div>
          </li>
          <li className="md:flex md:items-start md:gap-20">
            <img
              className="mx-auto mb-6 max-w-14 md:max-w-24"
              src={ride}
              alt=""
            />
            <div>
              <h2 className="md:mb-[2 mb-6 font-mono text-xl font-bold tracking-tighter text-darkNavy md:text-h4">
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
      <section className="mb-29 space-y-29 bg-white px-8 md:mb-[104px]">
        <article className="text-center">
          <img className="mx-auto mb-14 rounded-full" src={telemetry} alt="" />

          <div className="mx-auto max-w-[576px] space-y-8 md:space-y-10">
            <h2 className="mx-auto max-w-[457px] font-mono text-3.5xl/none font-bold tracking-tighter text-darkNavy md:text-h2">
              Easy to use riding telemetry
            </h2>
            <p className="mb-8 text-dimGrey">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you&apos;ve been using
              the scooter, your traveling distance, and many more things all in
              an easy to use app.
            </p>
            <button className="button">Learn More</button>
          </div>
        </article>
        <article className="text-center">
          <img className="mx-auto mb-14 rounded-full" src={nearYou} alt="" />

          <div className="mx-auto max-w-[576px] space-y-8 md:space-y-10">
            <h2 className="mx-auto max-w-[457px] font-mono text-3.5xl/none font-bold tracking-tighter text-darkNavy md:text-h2">
              Coming to a city near you
            </h2>
            <p className="mb-8 text-dimGrey">
              Scoot is available in 4 major cities so far. We’re expanding
              rapidly, so be sure to let us know if you want to see us in your
              hometown. We’re aiming to let our scooters loose on 23 cities over
              the coming year.
            </p>
            <button className="button">Learn More</button>
          </div>
        </article>
        <article className="text-center">
          <img className="mx-auto mb-14 rounded-full" src={payments} alt="" />

          <div className="mx-auto max-w-[576px] space-y-8 md:space-y-10">
            <h2 className="mx-auto max-w-[457px] font-mono text-3.5xl/none font-bold tracking-tighter text-darkNavy md:text-h2">
              Zero hassle payments
            </h2>
            <p className="mb-8 text-dimGrey">
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
