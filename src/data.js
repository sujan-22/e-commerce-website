import { GiClothes, GiConverseShoe } from "react-icons/gi";
import { RiComputerFill } from "react-icons/ri";
import { FaCouch, FaHome, FaStore } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";

const navData = [
  {
    to: "/store/clothing",
    label: "Clothing",
    icon: GiClothes,
  },
  {
    to: "/store/electronics",
    label: "Electronics",
    icon: RiComputerFill,
  },
  {
    to: "/store/furniture",
    label: "Furniture",
    icon: FaCouch,
  },
  {
    to: "/store/shoes",
    label: "Shoes",
    icon: GiConverseShoe,
  },
  {
    to: "/store/all",
    label: "Shop all",
    icon: FaBasketShopping,
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
