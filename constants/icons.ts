import bell from "@/assets/images/icons/bell.png";
import calendar_check from "@/assets/images/icons/calendar-check.png";
import chat from "@/assets/images/icons/chat.png";
import gear from "@/assets/images/icons/gear.png";
import home from "@/assets/images/icons/house.png";
import people from "@/assets/images/icons/people.png";
import person from "@/assets/images/icons/person.png";

export const icons = {
  home,
  people,
  gear,
  bell,
  person,
  calendar_check,
  chat,
} as const;

export type IconKey = keyof typeof icons;
