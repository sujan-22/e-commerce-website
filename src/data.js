import { MdLightbulb } from "react-icons/md";
import { FaMobile, FaHome, FaCouch } from "react-icons/fa";
import { GiWoodFrame } from "react-icons/gi";
import { IoBicycleOutline } from "react-icons/io5";

const navData = [
  {
    to: "/electronics",
    label: "Electronics",
    icon: FaMobile,
  },
  {
    to: "/home-decoration",
    label: "Home Decoration",
    icon: GiWoodFrame,
  },
  {
    to: "/furniture",
    label: "Furniture",
    icon: FaCouch,
  },
  {
    to: "/sports",
    label: "Sports",
    icon: IoBicycleOutline,
  },
  {
    to: "/lighting",
    label: "Lightning",
    icon: MdLightbulb,
  },
];

const specialItems = [
  {
    to: "/",
    label: "Home",
    icon: FaHome,
  },
];

export { navData, specialItems };
