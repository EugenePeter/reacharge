export type Palette = "primary" | "success" | "warning" | "danger" | "info";
export type NewColor = {
  [P in Palette]: Record<"color", string>;
};
