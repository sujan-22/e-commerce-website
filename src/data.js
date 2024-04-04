import { MdLightbulb } from "react-icons/md";
import { FaMobile, FaHome, FaStore, FaCouch } from "react-icons/fa";
import { GiWoodFrame } from "react-icons/gi";
import { BsLaptopFill } from "react-icons/bs";

const navData = [
  {
    to: "/store/smartphones",
    label: "Smartphones",
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
    to: "/store/laptops",
    label: "Laptops",
    icon: BsLaptopFill,
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
