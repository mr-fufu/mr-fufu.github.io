"use client";

import { useCallback, useEffect, useState } from "react";
import { ImageUI, traditionalImages, ImageData } from "../images";
import { Navigation } from "../navigation";
import { Socials } from "../socials";
import { IoClose } from "react-icons/io5";

export default function Traditional() {
  const [activeImage, setActiveImage] = useState<ImageData | undefined>(undefined);
  const overlay = useCallback(()=> {
    if (activeImage) {
      return (
        <>
          <div className="absolute w-full h-full bg-black opacity-75"></div>
          <div className="absolute rounded-lg shadow flex justify-center align-middle m-24">
            <ImageUI image={activeImage} />
            <div className="flex h-full align-items-top">
              <button className="p-2 right-0 top-0 text-white hover:text-gray-400" onClick={()=>{setActiveImage(undefined)}}>
                <IoClose size="24px" />
              </button>
            </div>
          </div>
        </>
      )
    }
    else {
      return null;
    }
  }, [activeImage]);
  useEffect(() => {
    window.addEventListener("keydown", ()=>{setActiveImage(undefined)});
    return () => {
      window.removeEventListener("keydown", ()=>{setActiveImage(undefined)});
    }
  },[]);
  return (
    <body className="flex flex-col w-full min-h-screen self-center items-center">
      <Navigation />
      <div className="mt-24 mb-12 text-xl">
        <h1>TRADITIONAL</h1>
      </div>
      {overlay()}
      <div className="flex inline-flex flex-grow w-full h-[600px] justify-center flex-wrap overflow-y-scroll mb-24">
        {
          // TODO: Double check a - b or b - a after real data is in
          traditionalImages.sort((a, b) => a.date.getUTCSeconds() - b.date.getUTCSeconds()).map((image, index) => {
            return (
              <div key={"image"+index} className="flex w-[400px] h-[400px] m-2" onClick={ () => { setActiveImage(image) }}>
                <ImageUI image={image} />
              </div>
            );
          })
        }
      </div>
      <Socials />
    </body>
  );
}