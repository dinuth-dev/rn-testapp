import type { ImageSourcePropType } from "react-native";
import { icons } from "./icons";
import images from "./images";

export const tabs = [
  { name: "index", title: "Home", icon: icons.home },
  { name: "users", title: "Users", icon: icons.people },
  { name: "notifications", title: "Notifications", icon: icons.bell },
  { name: "settings", title: "Settings", icon: icons.gear },
];

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
    user_img: images.avatar,
  },
  {
    id: 2,
    name: "Grey Campos",
    company_name: "Ravenetworks",
    user_type: "Member",
    user_img: images.avatar,
  },
  {
    id: 3,
    name: "Sutton Kramer",
    company_name: "Herb Wheels",
    user_type: "Admin",
    user_img: images.avatar,
  },
  {
    id: 4,
    name: "Kylan Pollard",
    company_name: "Red Aviation",
    user_type: "Guest",
    user_img: images.avatar,
  },
  {
    id: 5,
    name: "Emma Cantu",
    company_name: "Rabbit Limited",
    user_type: "Member",
    user_img: images.avatar,
  },
];
