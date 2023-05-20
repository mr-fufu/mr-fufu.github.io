import { FaTwitter, FaArtstation, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Socials() {
  return (
    <div className="absolute bottom-[48px] flex inline-flex w-full items-center justify-center mt-24">
      <a href="https://twitter.com/mrfufuAlso" target="_blank">
        <FaTwitter size="18px" className="mx-2 text-white hover:text-gray-400"/>
      </a>
      <a href="https://www.instagram.com/mrfufu_also/" target="_blank">
        <FaInstagram size="18px" className="mx-2 text-white hover:text-gray-400"/>
      </a>
      <a href="https://www.linkedin.com/in/jack-xie-mech/" target="_blank">
        <FaLinkedin size="18px" className="mx-2 text-white hover:text-gray-400"/>
      </a>
      <a href="https://www.artstation.com/" target="_blank">
        <FaArtstation size="18px" className="mx-2 text-white hover:text-gray-400"/>
      </a>
    </div>
  );
}