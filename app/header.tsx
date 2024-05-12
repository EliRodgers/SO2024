// CAN TRY AGAIN LATER - collapsible header upon scroll
import Image from "next/image";

const Header = () => {
  return (
    <header className="overflow-hidden">
      {/* <div className="flex lg:shrink-0 col-span-1 lg:py-5 items-center justify-center transition ease-in-out delay:150 duration:300 hover:scale-105 hover:animate-pulse">
        <div className="transform scale-75 lg:scale-100">
          <Button />
        </div>
      </div> */}
      {/* <div className="justify-center items-center lg:col-span-6 p-2 lg:p-5"> */}
      {/* <div className="h-[20rem] mix-blend-multiply absolute -z-10 top-0 left-0 bg-gradient-to-t from-darkest-blue from-20% via-lightest-blue to-transparent md:h-[42rem] lg:h-[48.6rem] w-full" /> */}
      <div className="absolute -z-20 -top-[2.5rem] md:top-0 lg:-top-[18.3rem] left-0">
        <Image
          src="/stanford.jpg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="photo"
        />
      </div>
      {/* <div className="mt-[25rem] lg:text-8xl bg-gradient-to-r from-lightest-blue via-white to-lightest-blue bg-clip-text text-transparent text-[2.5rem] leading-10 font-bold font-grotesksc"> */}
      <div className="lg:animate-fade mt-[7.2rem] md:mt-[25rem] lg:text-8xl text-[2.2rem] leading-[2.2rem] font-bold font-grotesksc">
        2024 Stanford Spring Open Tournament
        <div className="lg:text-2xl text-base bg-gradient-to-r from-lighter-blue from-30% via-bright-blue to-lighter-blue to-70% bg-clip-text text-transparent font-bold italic font-grotesksc">
          May 25, 2024 ⋆ Stanford, CA
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
