import { MdLightbulb } from "react-icons/md";
import { FaMobile, FaHome, FaStore, FaCouch } from "react-icons/fa";
import { GiWoodFrame } from "react-icons/gi";
import { IoBicycleOutline } from "react-icons/io5";

const navData = [
  {
    to: "/store/electronics",
    label: "Electronics",
    icon: FaMobile,
  },
  {
    to: "/store/home-decoration",
    label: "Home Decoration",
    icon: GiWoodFrame,
  },
  {
    to: "/store/furniture",
    label: "Furniture",
    icon: FaCouch,
  },
  {
    to: "/store/sports",
    label: "Sports",
    icon: IoBicycleOutline,
  },
  {
    to: "/store/lighting",
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
  {
    to: "/store",
    label: "Store",
    icon: FaStore,
  },
];

export { navData, specialItems };
