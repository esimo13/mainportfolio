import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* <div className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div> */}
      <div className="w-full h-screen absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
            King's Hand
          </h1>
          <p className="font-light text-foreground text-lg mt-8">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
