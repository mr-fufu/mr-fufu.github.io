import Link from "next/link";
import { FaTwitter, FaArtstation, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  const firstName: string = "JACK";
  const lastName: string = "XIE";
  const cardStyles: string = "flex h-48 brightness-150 bg-center rounded justify-center items-center duration-300 saturate-100 hover:saturate-0 cursor-pointer";

  const Letter = ({s}: {s: string}) => <h1 className="opacity-100 hover:opacity-20 duration-200">{s}</h1>;

  return (
    <body className="flex min-h-screen flex-col items-center">
      <div className="absolute right-[24px] top-[24px]">
        <Link href="/about" className="text-xs text-gray-400 mr-4">
          ABOUT
        </Link>
        <button className="text-xs text-gray-400">
          CONTACT
        </button>
      </div>
      <div className="w-full py-24 inline-flex cursor-default justify-center text-xl">
        {
          firstName.split('').map(c => {
            return (
              <Letter s={c} key={c} />
            )
          })
        }
        <div className="w-1.5"></div>
        {
          lastName.split('').map(c => {
            return (
              <Letter s={c} key={c} />
            )
          })
        }
      </div>
      <div className="flex flex-col w-full">
        <div className={cardStyles} style={{backgroundImage:`url("/tradPlaceholder.jpg")`}}>
          <svg className="w-full text-center" viewBox="0 0 112 18">
            <text x="0" y="15">TRADITIONAL</text>
          </svg>
        </div>
        <div className={cardStyles} style={{backgroundImage:`url("/digitalPlaceholder.jpg")`}}>
          <svg className="w-full text-center" viewBox="0 0 112 18">
            <text className="stroke-0 fill-white" x="0" y="15">DIGITAL</text>
          </svg>
        </div>
        <div className={cardStyles} style={{backgroundImage:`url("/gameDevPlaceholder.jpg")`}}>
          <svg className="w-full text-center" viewBox="0 0 112 18">
            <text x="0" y="15">GAME DEV</text>
          </svg>
        </div>
      </div>
      <div className="flex flex-row w-full items-center justify-center mt-24">
        <a href="https://twitter.com/mrfufuAlso">
          <FaTwitter size="18px" className="mx-2 text-white hover:text-gray-400"/>
        </a>
        <a href="https://www.instagram.com/mrfufu_also/">
          <FaInstagram size="18px" className="mx-2 text-white hover:text-gray-400"/>
        </a>
        <a href="https://www.linkedin.com/in/jack-xie-mech/">
          <FaLinkedin size="18px" className="mx-2 text-white hover:text-gray-400"/>
        </a>
        <a href="https://www.artstation.com/">
          <FaArtstation size="18px" className="mx-2 text-white hover:text-gray-400"/>
        </a>
      </div>
    </body>
  )
}