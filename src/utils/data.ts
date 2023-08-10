import { designsTypes, menuOptionsTypes } from "./types";
import gd1 from "../assets/images/gd1.png";
import gd2 from "../assets/images/gd2.png";
import gd3 from "../assets/images/gd3.png";
import gd4 from "../assets/images/gd4.png";
import gd5 from "../assets/images/gd5.png";
import gd6 from "../assets/images/gd6.png";
import ui1 from "../assets/images/ui1.png";
import ui2 from "../assets/images/ui2.png";
import ui3 from "../assets/images/ui3.png";


export const menuOptions: menuOptionsTypes[] = [
  { id: 1, label: "About", link: "about" },
  { id: 2, label: "Skills", link: "skills" },
  { id: 3, label: "Experience", link: "experience" },
  { id: 4, label: "UI/UX", link: "ui/ux" },
  { id: 5, label: "Designs", link: "graphic" },
  { id: 6, label: "Contact", link: "contact" },
];

export const graphicDesignsOptions: designsTypes[] = [
  {
    id: 1,
    image: gd1,
  },
  {
    id: 2,
    image: gd2,
  },
  {
    id: 3,
    image: gd3,
  },
  {
    id: 4,
    image: gd4,
  },
  {
    id: 5,
    image: gd5,
  },
  {
    id: 6,
    image: gd6,
  },
];

export const uiUxDesignsOptions: designsTypes[] = [
  {
    id: 1,
    image: ui1,
  },
  {
    id: 2,
    image: ui2,
  },
  {
    id: 3,
    image: ui3,
  },

];
