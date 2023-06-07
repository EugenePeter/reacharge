export const capitalize = (str = ""): string =>
  str
    .toLowerCase()
    .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
export * from "./validator";
export * from "./dummyData";
