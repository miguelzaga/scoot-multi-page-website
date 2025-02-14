import ourTech from "/src/assets/images/our-tech.jpg";
import ourIntegrity from "/src/assets/images/our-integrity.jpg";
import ourCommunity from "/src/assets/images/our-community.jpg";

function ValuesList() {
  return (
    <ol className="flex flex-col gap-14 lg:flex-row lg:gap-[30px] text-center">
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
          <div className="absolute bottom-0 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-yellow font-mono text-2xl/7 font-bold tracking-tighter text-darkNavy">
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
          <div className="absolute bottom-0 left-1/2 flex h-24 w-24 -translate-x-1/2 items-center justify-center rounded-full bg-yellow font-mono text-2xl/7 font-bold tracking-tighter text-darkNavy">
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
    </ol>
  )
}

export default ValuesList
