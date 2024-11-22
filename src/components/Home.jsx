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
        <div className="pb-[179px] pt-[115px] text-center text-white">
          <h1 className="mb-6 font-mono text-h3 font-bold tracking-tighter">
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
      <section className="bg-white px-8">
        <ul className="my-29 space-y-12 text-center">
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
      <section className="space-y-29 mb-29 bg-white px-8">
        <article className="text-center">
          <img className="mb-14 rounded-full" src={telemetry} alt="" />
          <h2 className="text-3.5xl/none mb-8 font-mono font-bold tracking-tighter text-darkNavy">
            Easy to use riding telemetry
          </h2>
          <p className="mb-8 text-dimGrey">
            The Scoot app is available with riding telemetry. This means it can
            show you your average speed, how long you&apos;ve been using the
            scooter, your traveling distance, and many more things all in an
            easy to use app.
          </p>
          <button className="button">Learn More</button>
        </article>
        <article className="text-center">
          <img className="mb-14 rounded-full" src={nearYou} alt="" />
          <h2 className="text-3.5xl/none mb-8 font-mono font-bold tracking-tighter text-darkNavy">
            Coming to a city near you
          </h2>
          <p className="mb-8 text-dimGrey">
            {" "}
            Scoot is available in 4 major cities so far. We’re expanding
            rapidly, so be sure to let us know if you want to see us in your
            hometown. We’re aiming to let our scooters loose on 23 cities over
            the coming year.
          </p>
          <button className="button"> Learn More</button>
        </article>
        <article className="text-center">
          <img className="mb-14 rounded-full" src={payments} alt="" />
          <h2 className="text-3.5xl/none mb-8 font-mono font-bold tracking-tighter text-darkNavy">
            Zero hassle payments
          </h2>
          <p className="mb-8 text-dimGrey">
            Our payment is as easy as one two three. We accept most credit cards
            and debit cards. You can also link your PayPal account inside the
            app. Need to pay later? No worries! You can defer payment for up to
            a month.
          </p>
          <button className="button"> Learn More</button>
        </article>
      </section>
    </>
  );
}

export default Home;
