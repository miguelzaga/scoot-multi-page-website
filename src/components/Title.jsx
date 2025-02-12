import whiteCircles from "/src/assets/patterns/white-circles.svg";

function Title({ name, imgMobile, imgTablet, imgDesktop }) {
  return (
    <header className="relative z-0 overflow-clip bg-darkNavy px-[97px] py-[60px] md:py-[72px]">
      <h1 className="mx-auto max-w-desktop text-center font-mono text-h3 font-bold tracking-tighter text-white md:text-left md:text-h1">
        {name}
      </h1>
      <picture>
        <source media="(min-width: 1024px)" srcSet={imgDesktop} />
        <source media="(min-width: 640px)" srcSet={imgTablet} />
        <img
          src={imgMobile}
          className="absolute bottom-0 left-0 top-0 -z-10 min-h-full w-full"
          alt=""
        />
      </picture>
      <img
        src={whiteCircles}
        className="invisible absolute right-[-31px] top-[69px] w-fit md:visible"
      />
    </header>
  );
}

export default Title;
