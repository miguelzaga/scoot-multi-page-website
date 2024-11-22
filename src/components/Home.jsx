import locate from "/src/assets/icons/locate.svg";
import ride from "/src/assets/icons/ride.svg";
import scooter from "/src/assets/icons/scooter.svg";

function Home() {
  return (
    <>
      <section className="bg-darkNavy px-8">
        <div className="pb-[179px] pt-[115px] text-center text-white">
          <h1 className="text-h3 mb-6 font-mono font-bold tracking-tighter">
            Scooter sharing made simple{" "}
          </h1>
          <p className="mb-[34px]">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!{" "}
          </p>
          <button className="button">Get Scootin</button>
        </div>
      </section>
      <section className="px-8">
        <ul className="my-29 flex flex-col gap-12 text-center">
          <li>
            <img className="mx-auto mb-6 w-14" src={locate} alt="" />
            <h2 className="mb-6 font-mono text-xl font-bold tracking-tighter text-darkNavy">
              Locate with app
            </h2>
            <p className="text-dimGrey">
              {" "}
              Use the app to find the nearest scooter to you. We are
              continuously placing scooters in the areas with most demand, so
              one should never be too far away.
            </p>
          </li>
          <li>
            <img className="mx-auto mb-6 w-14" src={scooter} alt="" />
            <h2 className="mb-6 font-mono text-xl font-bold tracking-tighter text-darkNavy">
              Pick your scooter{" "}
            </h2>
            <p className="text-dimGrey">
              We show the most important info for the scooters closest to you.
              So you know how much charge they have left and can see roughly how
              much it will cost.
            </p>
          </li>
          <li>
            <img className="mx-auto mb-6 w-14" src={ride} alt="" />
            <h2 className="font-mono text-xl font-bold text-darkNavy">
              {"  tracking-tighter mb-6"}
              Enjoy the ride
            </h2>
            <p className="text-dimGrey">
              {" "}
              Scan the QR code and the bike will unlock. Retract the cable lock,
              put on a helmet, and you’re off! Always lock bikes away from
              walkways and accessibility ramps.
            </p>
          </li>
        </ul>
      </section>
      <section>
        Easy to use riding telemetry The Scoot app is available with riding
        telemetry. This means it can show you your average speed, how long
        you&apos;ve been using the scooter, your traveling distance, and many
        more things all in an easy to use app. Learn More Coming to a city near
        you Scoot is available in 4 major cities so far. We’re expanding
        rapidly, so be sure to let us know if you want to see us in your
        hometown. We’re aiming to let our scooters loose on 23 cities over the
        coming year. Learn More Zero hassle payments Our payment is as easy as
        one two three. We accept most credit cards and debit cards. You can also
        link your PayPal account inside the app. Need to pay later? No worries!
        You can defer payment for up to a month. Learn More
      </section>
    </>
  );
}

export default Home;
