import Image from "next/image";
import { Navigation } from "../navigation";
import { Socials } from "../socials";

export default function About() {
  return (
    <body className="flex w-full min-h-screen flex-col items-center">
      <Navigation />
      <div className="py-24 text-xl">
        <h1>ABOUT</h1>
      </div>
      <div className="w-full px-24 flex flex-row place-content-evenly">
        <div className="min-w-[25%] mr-8">
          <Image width={500} height={500} alt="Picture of Jack" src="/profilePhoto.png" className="rounded-full"/>
        </div>
        <div className="text-gray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec nibh lacinia velit scelerisque congue. In a feugiat magna, sit amet dignissim lectus. Proin vel ex a nulla consectetur semper a sed mi. Praesent luctus vitae ligula id feugiat. Quisque ac facilisis sem. Duis pulvinar gravida mauris. Fusce dignissim massa sed scelerisque condimentum. Curabitur ultricies porttitor nulla, et eleifend ligula cursus eget. Donec sed laoreet quam. Sed quis turpis sed magna volutpat dignissim. Phasellus vulputate neque at pretium congue. Nunc quis sapien lorem. Nunc justo nisl, placerat sed magna et, auctor euismod turpis. Nulla molestie, odio eu cursus malesuada, metus mi convallis sapien, vitae pulvinar nulla leo eget lacus. Proin blandit imperdiet elit at pharetra.
          <br />
          <br />
          Donec volutpat, nunc sed cursus dictum, arcu sapien pretium enim, vel ullamcorper sem orci porttitor leo. Aenean tortor ipsum, imperdiet ut diam ac, commodo sodales leo. Donec pharetra purus nunc, vel laoreet est finibus condimentum. In lobortis malesuada nibh, nec ultrices ipsum vulputate at. Etiam auctor ipsum non auctor lacinia. 
        </div>
      </div>
      <Socials />
    </body>
  );
}