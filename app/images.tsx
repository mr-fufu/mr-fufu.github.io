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
    <Image width={360} height={360} className="object-cover rounded" src={props.image.src} alt={props.image.name} />
  );
}

export const traditionalImages: ImageData[] = [
  {
    name: "TESTIBEX",
    src: "https://drive.google.com/uc?export=view&id=10mMoKMnC80BWghJ9ZxxWG-txTA5Gv50H",
    date: new Date(),
    tags: []
  },
  {
    name: "TESTIBEX",
    src: "https://drive.google.com/uc?export=view&id=10mMoKMnC80BWghJ9ZxxWG-txTA5Gv50H",
    date: new Date(),
    tags: []
  },
  {
    name: "TESTIBEX",
    src: "https://drive.google.com/uc?export=view&id=10mMoKMnC80BWghJ9ZxxWG-txTA5Gv50H",
    date: new Date(),
    tags: []
  },
  {
    name: "TESTIBEX",
    src: "https://drive.google.com/uc?export=view&id=10mMoKMnC80BWghJ9ZxxWG-txTA5Gv50H",
    date: new Date(),
    tags: []
  },
  {
    name: "TESTIBEX",
    src: "https://drive.google.com/uc?export=view&id=10mMoKMnC80BWghJ9ZxxWG-txTA5Gv50H",
    date: new Date(),
    tags: []
  },
  {
    name: "TESTIBEX",
    src: "https://drive.google.com/uc?export=view&id=10mMoKMnC80BWghJ9ZxxWG-txTA5Gv50H",
    date: new Date(),
    tags: []
  },
  {
    name: "TESTIBEX",
    src: "https://drive.google.com/uc?export=view&id=10mMoKMnC80BWghJ9ZxxWG-txTA5Gv50H",
    date: new Date(),
    tags: []
  },
  {
    name: "TESTIBEX",
    src: "https://drive.google.com/uc?export=view&id=10mMoKMnC80BWghJ9ZxxWG-txTA5Gv50H",
    date: new Date(),
    tags: []
  },
  {
    name: "TESTIBEX",
    src: "https://drive.google.com/uc?export=view&id=10mMoKMnC80BWghJ9ZxxWG-txTA5Gv50H",
    date: new Date(),
    tags: []
  },
]

export const digitalImages: ImageData[] = [
  
]

export const gamedevImages: ImageData[] = [
  
]