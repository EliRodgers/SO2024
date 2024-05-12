// CAN TRY AGAIN LATER - collapsible header upon scroll
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative overflow-hidden">
      {/* <div className="flex lg:shrink-0 col-span-1 lg:py-5 items-center justify-center transition ease-in-out delay:150 duration:300 hover:scale-105 hover:animate-pulse">
        <div className="transform scale-75 lg:scale-100">
          <Button />
        </div>
      </div> */}
      {/* <div className="justify-center items-center lg:col-span-6 p-2 lg:p-5"> */}
      {/* <div className="h-[20rem] mix-blend-multiply absolute -z-10 top-0 left-0 bg-gradient-to-t from-darkest-blue from-20% via-lightest-blue to-transparent md:h-[42rem] lg:h-[48.6rem] w-full" /> */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full -z-20">
        <Image
          src="/stanford.jpg"
          layout="responsive"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
          alt="photo"
        />
      </div>
      {/* <div className="mt-[25rem] lg:text-8xl bg-gradient-to-r from-lightest-blue via-white to-lightest-blue bg-clip-text text-transparent text-[2.5rem] leading-10 font-bold font-grotesksc"> */}
      <div className="relative lg:animate-fade mt-[7.2rem] md:mt-[25rem] lg:text-8xl text-[2.2rem] leading-[2.2rem] font-bold font-arial">
        2024 Stanford Spring Open Tournament
        <div className="relative lg:text-2xl text-base bg-gradient-to-r from-red-500 via-red-500 to-red-600 bg-clip-text text-transparent font-bold italic font-source-sans-pro">
          May 25, 2024 ⋆ Stanford, CA
        </div>
      </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
