export const colors = {
  primary: "#36415a",
  secondary: "#b7d894",
  black: "#202734",
  light: "#eeeeee",
} as const;

export const spacing = {
  2: 8,
  5: 20,
  8: 32,
  12: 48,
  18: 72,
} as const;

export const components = {
  tabBar: {
    height: spacing[18],
    horizontalInset: spacing[5],
    radius: spacing[8],
    iconFrame: spacing[12],
    itemPaddingVertical: spacing[2],
  },
} as const;
