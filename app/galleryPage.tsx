"use client";

import { useCallback, useEffect, useState } from "react";
import { ImageUI, ImageData } from "./images";
import { Navigation } from "./navigation";
import { Socials } from "./socials";
import { IoClose } from "react-icons/io5";

interface GalleryProps {
    pageTitle: string;
    images: ImageData[];
}

export function GalleryPage(props: GalleryProps) {
  const [activeImage, setActiveImage] = useState<ImageData | undefined>(undefined);
  const overlay = useCallback(()=> {
    if (activeImage) {
      return (
        <div className="absolute z-20 w-full h-full overflow-y-scroll">
          <div className="absolute w-full h-full bg-black opacity-75"></div>
          <div className="absolute rounded-lg shadow flex justify-center align-middle w-full">
            <ImageUI image={activeImage} />
            <div className="flex h-full align-items-top">
              <button className="p-2 right-0 top-0 text-white hover:text-gray-400" onClick={()=>{setActiveImage(undefined)}}>
                <IoClose size="24px" />
              </button>
            </div>
          </div>
        </div>
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
      <div className="absolute w-full h-full mb-24 text-[200px] z-[-1] top-0 opacity-10 text-center mt-8">
        <h1>{props.pageTitle}</h1>
      </div>
      <Navigation />
      {overlay()}
      <div className="w-[90%] ml-[5%] mr-[5%] mt-44">
        <div className="flex inline-flex flex-grow h-[600px] justify-left flex-wrap overflow-y-scroll mb-24 px-4">
          {
            // TODO: Double check a - b or b - a after real data is in
            props.images.sort((a, b) => a.date.getUTCSeconds() - b.date.getUTCSeconds()).map((image, index) => {
              return (
                <div key={"image"+index} className="flex w-[360px] h-[360px] rounded m-2 hover:ring-white hover:ring cursor-pointer" onClick={ () => { setActiveImage(image) }}>
                  <ImageUI image={image} />
                </div>
              );
            })
          }
        </div>
      </div>
      <Socials />
    </body>
  );
}