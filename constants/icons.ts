import bell from "@/assets/images/icons/bell.png";
import calendar_check from "@/assets/images/icons/calendar-check.png";
import chat from "@/assets/images/icons/chat.png";
import gear from "@/assets/images/icons/gear.png";
import heart_fill from "@/assets/images/icons/heart-fill.png";
import heart from "@/assets/images/icons/heart.png";
import home from "@/assets/images/icons/house.png";
import list from "@/assets/images/icons/list.png";
import people from "@/assets/images/icons/people.png";
import person from "@/assets/images/icons/person.png";
import x_lg from "@/assets/images/icons/x-lg.png";

export const icons = {
  home,
  people,
  gear,
  bell,
  person,
  calendar_check,
  chat,
  heart,
  heart_fill,
  list,
  x_lg,
} as const;

export type IconKey = keyof typeof icons;
