import Ply1 from "../assets/av,1.jpg";
import Ply2 from "../assets/av,2.jpg";
import Ply3 from "../assets/av,3.jpg";
import Ply4 from "../assets/av,4.jpg";
import CodBanner from "../assets/c,banner.jpg";
import cod1 from "../assets/cod,1.jpg";
import cod2 from "../assets/cod,2.jpg";
import cod3 from "../assets/cod,3.jpg";
import ffBanner from "../assets/ff,banner.jpg";
import ff1 from "../assets/ff,1.jpg";
import ff2 from "../assets/ff,2.jpg";
import ff3 from "../assets/ff,3.jpg";

export const Players = [
  {
    id: 1,
    name: "Vino_Costa",
    tag: "Game Player",
    img: Ply1,
    game_banner: CodBanner,
    count: 50,
    games: [
      {
        id: 11,
        img: cod1,
        title: "CoD Game One",
        amount: "12,500",
      },
      {
        id: 22,
        img: cod2,
        title: "CoD Game two",
        amount: "10,000",
      },
      {
        id: 33,
        img: cod3,
        title: "CoD Game three",
        amount: "2,900",
      },
    ],
  },
  {
    id: 2,
    name: "Lora Misa",
    tag: "Virus",
    img: Ply2,
    game_banner: ffBanner,
    count: 150,
    games: [
      {
        id: 11,
        img: ff1,
        title: "FF Game One",
        amount: "12,500",
      },
      {
        id: 22,
        img: ff2,
        title: "FF Game two",
        amount: "10,000",
      },
      {
        id: 33,
        img: ff3,
        title: "FF Game three",
        amount: "2,900",
      },
    ],
  },
];
