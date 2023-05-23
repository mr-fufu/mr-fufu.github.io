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
    <Image width={window.innerWidth} height={window.innerHeight} className="object-cover rounded" layout="raw" src={props.image.src} alt={props.image.name} />
  );
}

//uc?export=view&id=
/*
  {
    name: "",
    src: "",
    date: new Date(),
    tags: []
  },
*/
export const traditionalImages: ImageData[] = [
  {
    name: "Canary_Sparrow",
    src: "https://drive.google.com/uc?export=view&id=1RqfY3MeVOxaHR1tu-xZAfYkymSKiufsC",
    date: new Date(),
    tags: []
  },
  {
    name: "Chicken",
    src: "https://drive.google.com/uc?export=view&id=1MT9vZkLgfkDCfMI3gqvgMH8VdZmdFNNd",
    date: new Date(),
    tags: []
  },
  {
    name: "Falcon",
    src: "https://drive.google.com/uc?export=view&id=18KAG4Zqr4ItGcpXHs11VDJaEn1aVNxtg",
    date: new Date(),
    tags: []
  },
  {
    name: "FishBlue",
    src: "https://drive.google.com/uc?export=view&id=13utbMMFUfbqYMAjEJeUigeKRdoDuOQFs",
    date: new Date(),
    tags: []
  },
  {
    name: "Fromolog",
    src: "https://drive.google.com/uc?export=view&id=1EWINgDggcE_6dUZi7HFVghU4sJhNJ_FZ",
    date: new Date(),
    tags: []
  },
  {
    name: "Goasts",
    src: "https://drive.google.com/uc?export=view&id=1_9qbO5gra4ozdPKtskEQGtCdpqdjrk7N",
    date: new Date(),
    tags: []
  },
  {
    name: "Parakeet",
    src: "https://drive.google.com/uc?export=view&id=1KdJCWG5PBzhZrkWzxzHqw0XlqPHVVS2E",
    date: new Date(),
    tags: []
  },
  {
    name: "Scubs",
    src: "https://drive.google.com/uc?export=view&id=16HJ5QQeIzhLrCIzsqQbvLAD1FnRTDO_s",
    date: new Date(),
    tags: []
  },
]

//uc?export=view&id=
export const digitalImages: ImageData[] = [
  {
    name: "AlakazamLibrary",
    src: "https://drive.google.com/uc?export=view&id=1AP1GOBi34_jsSlrFDPhVA6o2vqPiz40o",
    date: new Date(),
    tags: []
  },
  {
    name: "BeepBeepImAJeep",
    src: "https://drive.google.com/uc?export=view&id=1auTzFggcOzf7HgUDLN7VaPt7Mc-wCoAW",
    date: new Date(),
    tags: []
  },
  {
    name: "DanTheSedan",
    src: "https://drive.google.com/uc?export=view&id=1OiL-W2dZiMba14YBf1-kfzxD0lhBpGci",
    date: new Date(),
    tags: []
  },
  {
    name: "frog",
    src: "https://drive.google.com/uc?export=view&id=1xpOQMRcVDsXJXeuxjiqOQlkHVAWDjJ_Z",
    date: new Date(),
    tags: []
  },
  {
    name: "HeracrossCafe",
    src: "https://drive.google.com/uc?export=view&id=12YC2FZm9y9m2sY2v3wSMljWxYAa_iVBA",
    date: new Date(),
    tags: []
  },
  {
    name: "HowdyImTractor",
    src: "https://drive.google.com/uc?export=view&id=1bEg0d1vaVAaqj80TwTAgILTfAuc53vOZ",
    date: new Date(),
    tags: []
  },
  {
    name: "JuneTheDune",
    src: "https://drive.google.com/uc?export=view&id=1Un2jLboOCtUnT16VLYJWD1acxsFiJbc0",
    date: new Date(),
    tags: []
  },
  {
    name: "King",
    src: "https://drive.google.com/uc?export=view&id=1Bup3tlObPsZs8N4mzMhavGlowdEd7F1v",
    date: new Date(),
    tags: []
  },
  {
    name: "Knittin",
    src: "https://drive.google.com/uc?export=view&id=17jX-m2XuXfmXX1FTWK7yYuRcXsvwaQrJ",
    date: new Date(),
    tags: []
  },
  {
    name: "MandrillMopedMisappropriation",
    src: "https://drive.google.com/uc?export=view&id=1k5aVhlEias_z5LZ-nQkf5DzObWCEz3Jm",
    date: new Date(),
    tags: []
  },
  {
    name: "MechKnight",
    src: "https://drive.google.com/uc?export=view&id=1OttSjL4Vi5mEm116YWalARM0S5sZXBl0",
    date: new Date(),
    tags: []
  },
  {
    name: "MikeTheBike",
    src: "https://drive.google.com/uc?export=view&id=1Uy-WqaS-szSJadr4P0-y-b_-e-nKmSBH",
    date: new Date(),
    tags: []
  },
  {
    name: "Muffet",
    src: "https://drive.google.com/uc?export=view&id=1m8vTb8VqaWvHHI0F5BNB8Hk6WzaCXTYM",
    date: new Date(),
    tags: []
  },
  {
    name: "SkeleCatCard",
    src: "https://drive.google.com/uc?export=view&id=1tE4DEIJBH2Q8Z3uOzVy60aUlcOJ8_1Ro",
    date: new Date(),
    tags: []
  },
  {
    name: "Somegoodgrass",
    src: "https://drive.google.com/uc?export=view&id=1qVJzQ8cAGg022Cc1Kjjfd26EHDBBea3m",
    date: new Date(),
    tags: []
  },
  {
    name: "StitchesGreen",
    src: "https://drive.google.com/uc?export=view&id=1FvEehwNjbSi8Ihlh-UPI1AyYp4DzvqA3",
    date: new Date(),
    tags: []
  },
  {
    name: "struggleBeetleColor",
    src: "https://drive.google.com/uc?export=view&id=11ZO_km47DU_Fu0FCKJvOPbtJF4oeNKBc",
    date: new Date(),
    tags: []
  },
  {
    name: "SwaddleMoth",
    src: "https://drive.google.com/uc?export=view&id=1tqAoXLmpp8q8ItchfNnDkmVEtoDTCpvf",
    date: new Date(),
    tags: []
  },
  {
    name: "TractorFungus",
    src: "https://drive.google.com/uc?export=view&id=1jKE2LXWK7H7vsiSMwZ2JnTm7skeXeDS4",
    date: new Date(),
    tags: []
  },
  {
    name: "TuckTheTruck",
    src: "https://drive.google.com/uc?export=view&id=15t4zkNMM2NbsHr1bzxjrcDdTvjlSW1Zc",
    date: new Date(),
    tags: []
  },
  {
    name: "VenusaurVivarium",
    src: "https://drive.google.com/uc?export=view&id=1kG93bM3yrwOHQ4CjDZJWFRKaz1gz8naV",
    date: new Date(),
    tags: []
  },
  {
    name: "VeryCool",
    src: "https://drive.google.com/uc?export=view&id=1kLPc91bQYoTYaAzzZhKxJMvGGR36SInZ",
    date: new Date(),
    tags: []
  },
  {
    name: "WeedleTheBeetle",
    src: "https://drive.google.com/uc?export=view&id=1PjYyuKmNvp--zHJDQjP9G8VSzqCy524t",
    date: new Date(),
    tags: []
  },
]

export const gamedevImages: ImageData[] = [
  {
    name: "ClothingDesign",
    src: "https://drive.google.com/uc?export=view&id=1YBhU8GgMQWW7l8GKdR5cDBEHkEe_AXqz",
    date: new Date(),
    tags: []
  },
  {
    name: "IndoorEnvironmentAssets",
    src: "https://drive.google.com/uc?export=view&id=1Q0JedalkBt4-zcXz61cUU54PBBZc7oMB",
    date: new Date(),
    tags: []
  },
]

export const pixelartImages: ImageData[] = [
  {
    name: "AssemblyWelding",
    src: "https://drive.google.com/uc?export=view&id=1FA0JHXMR9cFLlKlmL1MoXeQpBrfu2drB",
    date: new Date(),
    tags: []
  },
  {
    name: "BigIsland",
    src: "https://drive.google.com/uc?export=view&id=1Zhc_kv_Nn-PhgZK718Ku2_tjJOw3sapy",
    date: new Date(),
    tags: []
  },
  {
    name: "Cafe",
    src: "https://drive.google.com/uc?export=view&id=1QmBZCwd5e8NHHGkUHrcRyzwNIeJ4rFM9",
    date: new Date(),
    tags: []
  },
  {
    name: "CarKnights",
    src: "https://drive.google.com/uc?export=view&id=1qhE3f9NO2Ubf9e2o5VmYlT4Y6MB3l0V4",
    date: new Date(),
    tags: []
  },
  {
    name: "Resized",
    src: "https://drive.google.com/uc?export=view&id=1jjyBetHhoOwlyojwHNvQ85uyHhsSN4aY",
    date: new Date(),
    tags: []
  },
  {
    name: "Station2",
    src: "https://drive.google.com/uc?export=view&id=1atnRproj4tURC90G17sVCAbpeYey-ArY",
    date: new Date(),
    tags: []
  },
  {
    name: "Steambeetle",
    src: "https://drive.google.com/uc?export=view&id=16q4miz9lQI_CwoBt-efQLVNECiPZC-Kj",
    date: new Date(),
    tags: []
  },
]

export const fanartImages: ImageData[] = [
  {
    name: "ChainsOfHate",
    src: "https://drive.google.com/uc?export=view&id=1zehxiP7l_OZUt4q7EzjxK3fS4P6Bihbr",
    date: new Date(),
    tags: []
  },
  {
    name: "GGJ2022",
    src: "https://drive.google.com/uc?export=view&id=1aJaaZXihYM4XR1pgGubk3R6XVnZNKMhQ",
    date: new Date(),
    tags: []
  },
  {
    name: "Malal",
    src: "https://drive.google.com/uc?export=view&id=1uUc7QfwOX8VubEhqovMOimjxAjwRpU4L",
    date: new Date(),
    tags: []
  },
  {
    name: "Omen",
    src: "https://drive.google.com/uc?export=view&id=1DA5cUy5y1w-okka-y9BJ4_nR9kDvFVTL",
    date: new Date(),
    tags: []
  },
  {
    name: "OtherBG_White",
    src: "https://drive.google.com/uc?export=view&id=1_JlJoo3lntVzj1bmhvJl4Q0HRuo3Cw6E",
    date: new Date(),
    tags: []
  },
  {
    name: "OtherBG",
    src: "https://drive.google.com/uc?export=view&id=1FmTNo-47v0BrLYRpbysVm1StBL9ko8pu",
    date: new Date(),
    tags: []
  },
  {
    name: "SkeleBG_White",
    src: "https://drive.google.com/uc?export=view&id=1aK0v06m9UcQ7ols3f9q3WyVwvKBegtrZ",
    date: new Date(),
    tags: []
  },
  {
    name: "SkeleBG",
    src: "https://drive.google.com/uc?export=view&id=1uZ_IJHxcNZrK5D1rxkKAnlnpCJfFjdfs",
    date: new Date(),
    tags: []
  },
  {
    name: "WolfBlank",
    src: "https://drive.google.com/uc?export=view&id=1FuX1DqjP3fu8EdDA8hj83ikxg4Hs9Zez",
    date: new Date(),
    tags: []
  },
  {
    name: "Yui&Oni",
    src: "https://drive.google.com/uc?export=view&id=1numtmnY4BQFAGkaMHQQ4vaqxZjjs_WAO",
    date: new Date(),
    tags: []
  },
]