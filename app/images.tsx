import Image from "next/image";

export type ImageData = {
  name: string,
  src: string,
  date: Date,
  tags: string[],
}

interface ImageUIProps {
  image: ImageData;
}

export function ImageUI(props: ImageUIProps) {
  return (
    <Image width={400} height={400} className="object-cover" src={props.image.src} alt={props.image.name} />
  );
}

export const traditionalImages: ImageData[] = [
  {
    name: "TESTIBEX",
    src: "https://drive.google.com/uc?export=view&id=10mMoKMnC80BWghJ9ZxxWG-txTA5Gv50H",
    date: new Date(),
    tags: []
  },
]

export const digitalImages: ImageData[] = [
  {
    name: "",
    src: "",
    date: new Date(),
    tags: []
  },
  {
    name: "",
    src: "",
    date: new Date(),
    tags: []
  },
]

export const gamedevImages: ImageData[] = [
  {
    name: "",
    src: "",
    date: new Date(),
    tags: []
  },
  {
    name: "",
    src: "",
    date: new Date(),
    tags: []
  },
]