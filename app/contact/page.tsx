import { Navigation } from "../navigation";
import { Socials } from "../socials";

export default function Contact() {
  return (
    <body className="flex w-full min-h-screen flex-col items-center">
      <Navigation />
      <div className="py-24 text-xl">
        <h1>CONTACT</h1>
      </div>
      <div>
        {
          // TODO: ADD FORM FOR CONTACT/INQUIRIES HERE
        }
      </div>
      <Socials />
    </body>
  );
}