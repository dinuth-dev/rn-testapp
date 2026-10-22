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
  member_img: ImageSourcePropType;
};

export const MEMBER_LIST: MemberList[] = [
  {
    id: "UGB00001",
    name: "3k Shipping Services",
    location: "Pakistan Karachi",
    country_code: "PK",
    branch: ["Globle", "Ecommerce"],
    member_img: images.thumbnail,
  },
];
