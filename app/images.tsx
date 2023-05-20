import Image from "next/image";

type ImageData = {
  name: string,
  src: string,
  date: Date,
  tags: string[],
}

export function ImageUI(image: ImageData) {
  return (
    <Image src={image.src} alt={image.name} />
  );
}

const traditionalImages: ImageData[] = [
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

const digitalImages: ImageData[] = [
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

const gamedevImages: ImageData[] = [
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