import Image from "next/image";
import { Navigation } from "../navigation";
import { Socials } from "../socials";

export default function About() {
  return (
    <body className="flex w-full min-h-screen flex-col items-center">
      <Navigation />
      <div className="w-full bg-black px-44 lg:px-80 mt-36 flex flex-row place-content-evenly">
        <div className="min-w-[25%] max-w-[48px] mr-12">
          <Image width={500} height={500} alt="Picture of Jack" src="/profilePhoto.png" className="rounded-full"/>
        </div>
        <div className="text-gray-200 p-4 text-justify h-[500px] max-h-[60vh] mt-12 overflow-hidden hover:overflow-y-auto">
          {
            // ABOUT PAGE TEXT CONTENT HERE
          }
          &apos;m Jack. Draw stuff.
        </div>
      </div>
      <Socials />
    </body>
  );
}