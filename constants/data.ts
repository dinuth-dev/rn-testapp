import type { ImageSourcePropType } from "react-native";
import { icons } from "./icons";
import images from "./images";

// Nav tabs data
export const tabs = [
  { name: "index", title: "Home", icon: icons.home },
  { name: "event", title: "Event", icon: icons.calendar_check },
  { name: "members", title: "Members", icon: icons.people },
  { name: "chat", title: "Chat", icon: icons.chat },
  { name: "profile", title: "Profile", icon: icons.person },
];

// Users data
export type UserList = {
  id: number;
  name: string;
  company_name: string;
  user_type: "Guest" | "Member" | "Admin";
  user_img: ImageSourcePropType;
};

export const USER_LIST: UserList[] = [
  {
    id: 1,
    name: "Treasure Davila",
    company_name: "Herb Software",
    user_type: "Guest",
    user_img: images.avatar_1,
  },
  {
    id: 2,
    name: "Grey Campos",
    company_name: "Ravenetworks",
    user_type: "Member",
    user_img: images.avatar_2,
  },
  {
    id: 3,
    name: "Sutton Kramer",
    company_name: "Herb Wheels",
    user_type: "Admin",
    user_img: images.avatar_3,
  },
  {
    id: 4,
    name: "Kylan Pollard",
    company_name: "Red Aviation",
    user_type: "Guest",
    user_img: images.avatar_1,
  },
  {
    id: 5,
    name: "Emma Cantu",
    company_name: "Rabbit Limited",
    user_type: "Member",
    user_img: images.avatar_2,
  },
];

// Member data
export type Branch = "Globle" | "Ecommerce";
export type ColorPair = [color1: string, color2: string];

export const BRANCH_LOGOS: Record<Branch, ImageSourcePropType> = {
  Globle: images.globle_logo,
  Ecommerce: images.ecommerce_logo,
};

export type MemberList = {
  id: string;
  name: string;
  location: string;
  country_code: string;
  branch: Branch[];
  colors: ColorPair;
  member_img: ImageSourcePropType;
};

export const MEMBER_LIST: MemberList[] = [
  {
    id: "UGB00001",
    name: "Italmondo SPA",
    location: "Italy Milano",
    country_code: "IT",
    branch: ["Globle", "Ecommerce"],
    colors: ["#01307a", "#045fab"],
    member_img: images.thumbnail,
  },
  {
    id: "UGB00014",
    name: "LIEGE CARGO AGENCY SA",
    location: "Belgium Grace-hollogne",
    country_code: "BE",
    branch: ["Globle", "Ecommerce"],
    colors: ["#01307a", "#045fab"],
    member_img: images.thumbnail,
  },
  {
    id: "UGB00022",
    name: "Affinity Maritime Services Pvt. Ltd.",
    location: "India Kolkata",
    country_code: "IN",
    branch: ["Globle"],
    colors: ["#01307a", "#045fab"],
    member_img: images.thumbnail,
  },
  {
    id: "UGB00023",
    name: "AKA International Link Sdn Bhd",
    location: "Malaysia Klang",
    country_code: "MY",
    branch: ["Globle"],
    colors: ["#01307a", "#045fab"],
    member_img: images.thumbnail,
  },
  {
    id: "UGB00031",
    name: "3k Shipping Services",
    location: "Pakistan Karachi",
    country_code: "PK",
    branch: ["Globle", "Ecommerce"],
    colors: ["#ff954e", "#ffc54e"],
    member_img: images.thumbnail,
  },
  {
    id: "UGB00034",
    name: "Accel Transport & Logistics",
    location: "India Chennai",
    country_code: "IN",
    branch: ["Globle"],
    colors: ["#ff954e", "#ffc54e"],
    member_img: images.thumbnail,
  },
  {
    id: "UGB00036",
    name: "Americargo Logistics",
    location: "Mexico Zapopan",
    country_code: "MX",
    branch: ["Globle"],
    colors: ["#ff954e", "#ffc54e"],
    member_img: images.thumbnail,
  },
  {
    id: "UGB00042",
    name: "AKA International Link Sdn Bhd",
    location: "Malaysia Klang",
    country_code: "MY",
    branch: ["Globle"],
    colors: ["#d32323", "#ff5757"],
    member_img: images.thumbnail,
  },
  {
    id: "UGB00044",
    name: "APR (Aduanas Pujol Rubio)",
    location: "Spain Valencia",
    country_code: "ES",
    branch: ["Globle"],
    colors: ["#d32323", "#ff5757"],
    member_img: images.thumbnail,
  },
];
