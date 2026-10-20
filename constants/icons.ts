import bell from "@/assets/images/icons/bell.png";
import gear from "@/assets/images/icons/gear.png";
import home from "@/assets/images/icons/house.png";
import people from "@/assets/images/icons/people.png";

export const icons = {
  home,
  people,
  gear,
  bell,
} as const;

export type IconKey = keyof typeof icons;
