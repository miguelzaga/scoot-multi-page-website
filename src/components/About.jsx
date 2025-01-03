import digitalEra from "/src/assets/images/digital-era.jpg";
import betterLiving from "/src/assets/images/better-living.jpg";

function About() {
  return (
    <>
      <header className="flex h-40 items-center justify-center bg-darkNavy">
        <h1 className="font-mono text-h3 font-bold text-white">About</h1>
      </header>

      <main>
        <section>
          <article>
            <img
              className="rounded-full"
              src={digitalEra}
              alt="Somebody scrolling on a cellphone"
            />
            <div>
              <h2>Mobility for the digital era</h2>
              <p>
                Getting around should be simple (and even fun!) for everyone. We
                embrace technology to provide low cost, smart access to scooters
                at your fingertips.
              </p>
            </div>
          </article>
          <article>
            <img src={betterLiving} alt="Yellow bus speeding in a gray city" />
            <div>
              <h2>Better urban living</h2>
              <p>
                We’re helping connect cities and bring people closer together.
                Our scooters are also fully-electric and we offset the minimal
                carbon footprint for each ride.
              </p>
            </div>
          </article>
        </section>
        <section>
          <h2>Our values</h2>
          <ul>
            <li>
              <div>
                <img src="" alt="" />
                <b>01</b>
              </div>
              <h3>Our tech</h3>
              <p>
                We’re using cutting edge technology to drive accessible urban
                transportation forward. Our fully electric scooters are a joy to
                ride!
              </p>
            </li>
            <li>
              <div>
                <img src="" alt="" />
                <b>02</b>
              </div>
              <h3>Our integrity</h3>
              <p>
                We are fully committed to deliver a great yet safe, sustainable
                micro-mobility experience in every city we serve.
              </p>
            </li>
            <li>
              <div>
                <img src="" alt="" />
                <b>03</b>
              </div>
              <h3>Our community</h3>
              <p>
                We support every community we serve. All workers are paid a
                living wage based on their location and are Scoot employees.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>FAQs</h2>
          <article>
            <h3> How it works</h3>
            <details>
              <summary>How do I download the app?</summary>
              To download the Scoot app, you can search “Scoot” in both the App
              and Google Play stores. An even simpler way to do it would be to
              click the relevant link at the bottom of this page and you’ll be
              re-directed to the correct page.
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
          </article>

          <article>
            <h3>Safe driving</h3>
            <details>
              <summary> Should I wear a helmet?</summary>
              Yes, please do! All cities have different laws. But we strongly
              strongly strongly recommend always wearing a helmet regardless of
              the local laws. We like you and we want you to be as safe as
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
              fun job we know but we make it as clear as possible. There&apos;s
              an option to add insurance for each trip, or you can sign up for
              annual insurance if you&apos;re a regular Scooter.
            </details>
          </article>
        </section>
      </main>
    </>
  );
}

export default About;
