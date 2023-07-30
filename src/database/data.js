import images from "./images";

// Recommendation
const recommData = [
  {
    id: 1,
    img: images.aot,
    city: "Attack on Titan",
    date: "88",
    result: "9.5",
  },
  {
    id: 2,
    img: images.steinsgate,
    city: "Steins Gate",
    date: "48",
    result: "8.5",
  },
  {
    id: 3,
    img: images.vinlandsaga,
    city: "Vinland Saga",
    date: "48",
    result: "8.2",
  },

  {
    id: 4,
    img: images.gintama,
    city: "Gintama",
    date: "363",
    result: "7.8",
  },
  {
    id: 5,
    img: images.onepiece,
    city: "One Piece",
    date: "1045",
    result: "7",
  },
  {
    id: 6,
    img: images.hunterxhunter,
    city: "Hunter x Hunter",
    date: "148",
    result: "7.5",
  },
  {
    id: 7,
    img: images.codegeass,
    city: "Code Geass",
    date: "56",
    result: "7",
  },
  {
    id: 8,
    img: images.rezero,
    city: "Re:Zero",
    date: "50",
    result: "7",
  },
];

// Manga
const mangaData = [
  {
    id: 1,
    img: images.oplogo,
  },
  {
    id: 2,
    img: images.toglogo,
  },
  {
    id: 3,
    img: images.aotlogo,
  },
  {
    id: 4,
    img: images.sllogo,
  },
  {
    id: 5,
    img: images.berserklogo,
  },
  {
    id: 6,
    img: images.tbatelogo,
  },
  {
    id: 7,
    img: images.dslogo,
  },
];

// Characters
const charactersData = [
  {
    id: 1,
    name: "Erwin",
    link: "",
    img: images.erwin,
    post: "Attack on Titan",
  },
  {
    id: 2,
    name: "Hwa Ryun",
    link: "",
    img: images.hwaryun,
    post: "Tower of God",
  },
  {
    id: 3,
    name: "Lelouch",
    link: "",
    img: images.lelouch,
    post: "Code Geass",
  },
  {
    id: 4,
    name: "Levi Ackerman",
    link: "",
    img: images.leviDP,
    post: "Attack on Titan",
  },
  {
    id: 5,
    name: "Itachi Uchiha",
    link: "",
    img: images.itachi,
    post: "Naruto Shippuden",
  },
  {
    id: 6,
    name: "Sora",
    link: "",
    img: images.sora,
    post: "No Game No Life",
  },
  {
    id: 7,
    name: "Khun Agneous",
    link: "",
    img: images.khun,
    post: "Tower of God",
  },
  {
    id: 8,
    name: "Ayanokoji",
    link: "",
    img: images.ayanokoji,
    post: "Classroom of the Elite",
  },
  {
    id: 9,
    name: "Light Yagami (Kira)",
    link: "",
    img: images.kira,
    post: "Death Note",
  },
];

// Members
const membersData = [
  {
    id: 1,
    name: "Manthan K.",
    image: images.urek,
    phone: "( Me )",
    email: "mksoul1811@gmail",
  },
  {
    id: 2,
    name: "Eren Yeager",
    image: images.eren,
    phone: "Fictional",
    email: "eren@doesnt.exist",
  },

  {
    id: 3,
    name: "Levi Ackerman",
    image: images.levi,
    phone: "Do Exist",
    email: "levi@doesnt.exist",
  },
];

const data = {
  recommData,
  mangaData,
  charactersData,
  membersData,
};

export default data;
