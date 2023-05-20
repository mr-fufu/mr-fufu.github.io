"use client";

import Link from "next/link";
import { Navigation } from "./navigation";
import { Socials } from "./socials";

export default function Home() {
  const firstName: string = "JACK";
  const lastName: string = "IE";
  const cardStyles: string = "flex h-48 bg-center rounded justify-center items-center duration-500 saturate-100 cursor-pointer";

  const Letter = ({s}: {s: string}) => <h1 className="opacity-100 hover:opacity-20 duration-200 px-1">{s}</h1>;

  return (
    <body className="flex min-h-screen flex-col items-center">
      <Navigation />
      <div className="w-[500px] h-[500px] rotate-45 absolute flex self-center top-[260px] border border-gray-600"></div>
      <div className="w-full py-24 inline-flex cursor-default justify-center text-xl">
        {
          firstName.split('').map(c => {
            return (
              <Letter s={c} key={c} />
            )
          })
        }
        <div className="w-4"></div>
        <button>
          <Link href="/treasure">
            <h1 className="text-white hover:text-red-400 duration-200 px-1">X</h1>
          </Link>
        </button>
        {
          lastName.split('').map(c => {
            return (
              <Letter s={c} key={c} />
            )
          })
        }
      </div>
      <div className="flex flex-col w-full">
        <Link href="/traditional">
          <div id="tradBanner" 
            onMouseOver={()=>{
              document.getElementById("digitalBanner")!.style.filter = "blur(5px)";
              document.getElementById("gamedevBanner")!.style.filter = "blur(5px)";
            }} 
            onMouseOut={()=>{
              document.getElementById("digitalBanner")!.style.filter = "blur(0px)";
              document.getElementById("gamedevBanner")!.style.filter = "blur(0px)";
            }} 
            className={cardStyles} style={{backgroundImage:`url("/tradPlaceholder.jpg")`}}
          >
            <svg className="w-full text-center" viewBox="0 0 112 18">
              <text x="0" y="15">TRADITIONAL</text>
            </svg>
          </div>
        </Link>
        <Link href="/digital">
          <div id="digitalBanner" 
            onMouseOver={()=>{
              document.getElementById("tradBanner")!.style.filter = "blur(5px)";
              document.getElementById("gamedevBanner")!.style.filter = "blur(5px)";
            }} 
            onMouseOut={()=>{
              document.getElementById("tradBanner")!.style.filter = "blur(0px)";
              document.getElementById("gamedevBanner")!.style.filter = "blur(0px)";
            }} 
            className={cardStyles} style={{backgroundImage:`url("/digitalPlaceholder.jpg")`}}
          >
            <svg className="w-full text-center" viewBox="0 0 112 18">
              <text className="stroke-0 fill-white" x="0" y="15">DIGITAL</text>
            </svg>
          </div>
        </Link>
        <Link href="/gamedev">
          <div id="gamedevBanner" 
            onMouseOver={()=>{
              document.getElementById("tradBanner")!.style.filter = "blur(5px)";
              document.getElementById("digitalBanner")!.style.filter = "blur(5px)";
            }} 
            onMouseOut={()=>{
              document.getElementById("tradBanner")!.style.filter = "blur(0px)";
              document.getElementById("digitalBanner")!.style.filter = "blur(0px)";
            }} 
            className={cardStyles} style={{backgroundImage:`url("/gameDevPlaceholder.jpg")`}}
          >
            <svg className="w-full text-center" viewBox="0 0 112 18">
              <text x="0" y="15">GAME DEV</text>
            </svg>
          </div>
        </Link>
      </div>
      <Socials />
    </body>
  )
}