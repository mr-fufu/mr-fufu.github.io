import { Navigation } from "../navigation";
import { Socials } from "../socials";

export default function Gamedev() {
  return (
    <body className="flex w-full min-h-screen flex-col items-center">
      <Navigation />
      <div className="py-24 text-xl">
        <h1>GAME DEV</h1>
      </div>
      <div>
        {
          // TODO
        }
      </div>
      <Socials />
    </body>
  );
}