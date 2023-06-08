type Units = {
  rem: "rem";
  px: "px";
};

type SizeUnit = {
  rem: "rem";
  px: "px";
};

// type SizeCategory = {
//   zepto?: SizeUnit;
//   atto?: SizeUnit;
//   femto?: SizeUnit;
//   pico?: SizeUnit;
//   nano?: SizeUnit;
//   micro?: SizeUnit;
//   macro?: SizeUnit;
//   xxs?: SizeUnit;
//   xs?: SizeUnit;
//   sm?: SizeUnit;
//   md?: SizeUnit;
//   BASE?: SizeUnit;
//   lg?: SizeUnit;
//   xl?: SizeUnit;
//   xxl?: SizeUnit;
//   quarter?: string;
//   largest?: string | SizeUnit;
//   half?: string;
//   full?: string;
// };

type ColorValue = Record<string, any>;

type Sizes = {
  line: "zepto" | "atto" | "femto" | "pico" | "nano";
  height:
    | "zepto"
    | "micro"
    | "macro"
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "BASE"
    | "lg"
    | "xl"
    | "xxl"
    | "largest";
  width: "xxs" | "xs" | "sm" | "md" | "BASE" | "lg" | "xl" | "xxl" | "largest";
};

type LineSize = {
  [P in Sizes["line"]]: SizeUnit;
};

type HeightSize = {
  [P in Sizes["height"]]: SizeUnit;
};

type WidthSizes = {
  [P in Sizes["width"]]: SizeUnit;
};

interface SizeType extends LineSize, HeightSize, WidthSizes {}

type SizeProperty<S extends string> = { [P in S]: SizeType };
// type SizeUnitProperty<U extends string> = { [P in U]: SizeUnit };

type Colors =
  | "primary"
  | "secondary"
  | "accent"
  | "shade"
  | "success"
  | "info"
  | "warning"
  | "error";
export type Theme<
  S extends string = keyof Sizes
  // U extends string = keyof Units
> = {
  // sizes: SizeProperty<S> & SizeUnitProperty<U>;
  sizes: SizeProperty<S>;
  colors?: {
    [P in Colors]: ColorValue;
  };
};

export const baseTheme = {
  font: {
    face: "",
    sizes: {
      micro: { px: "4.23px", rem: "0.264rem" },
      macro: { px: "6.85px", rem: "0.428rem" },
      sm: { px: "11.09px", rem: "0.693rem" },
      BASE: { px: "17.94px", rem: "1.121rem" },
      lg: { px: "29.03px", rem: "1.814rem" },
      xl: {
        px: "46.97px",
        rem: "2.936rem",
      },
      xxl: { px: "76.01px", rem: "4.751rem" },
      xxxl: { px: "122.99px", rem: "7.687rem" },
    },
  },
  sizes: {
    utils: {
      BASE: { px: "1px", rem: "0.063rem" },
      nano: { px: "1.61px", rem: "0.101rem" },
      micro: { px: "2.61px", rem: "0.163rem" },
      macro: { px: "4.23px", rem: "0.264rem" },
      xxs: { px: "6.85px", rem: "0.428rem" },
      xs: { px: "11.09px", rem: "0.693rem" },
      sm: { px: "17.94px", rem: "1.121rem" },
      md: { px: "29.03px", rem: "1.814rem" },
      lg: {
        px: "46.97px",
        rem: "2.936rem",
      },
    },
    line: {
      zepto: { px: "0.1px", rem: "0.006rem" },
      atto: { px: ".25px", rem: "0.016rem" },
      femto: { px: ".5px", rem: "0.031rem" },
      pico: { px: "1px", rem: "0.063rem" },
      nano: { px: "1.61px", rem: "0.101rem" },
    },
    height: {
      pico: { px: "1px", rem: "0.063rem" },
      nano: { px: "1.61px", rem: "0.101rem" },
      micro: { px: "2.61px", rem: "0.163rem" },
      macro: { px: "4.23px", rem: "0.264rem" },
      xxs: { px: "6.85px", rem: "0.428rem" },
      xs: { px: "11.09px", rem: "0.693rem" },
      sm: { px: "17.94px", rem: "1.121rem" },
      md: { px: "29.03px", rem: "1.814rem" },
      BASE: {
        px: "46.97px",
        rem: "2.936rem",
      },
      lg: { px: "76.01px", rem: "4.751rem" },
      xl: { px: "122.99px", rem: "7.687rem" },
      xxl: { px: "199px", rem: "12.438rem" },
      largest: { px: "321.99px", rem: "20.124rem" },
      quarter: "25%",
      half: "50%",
      full: "100%",
    },
    width: {
      xxs: { px: "29.03px", rem: "1.814rem" },
      xs: { px: "46.97px", rem: "2.936rem" },
      sm: { px: "76.01px", rem: "4.751rem" },
      md: { px: "122.99px", rem: "7.687rem" },
      BASE: {
        px: "199px",
        rem: "12.438",
      },
      lg: { px: "321.99px", rem: "20.124rem" },
      xl: { px: "520.99px", rem: "32.562rem" },
      xxl: { px: "842.99px", rem: "52.687rem" },
      largest: { px: "1363.99px", rem: "85.249" },
      quarter: "25%",
      half: "50%",
      full: "100%",
    },
  },
  colors: {
    primary: {},
    secondary: {},
    accent: {},
    shade: {},
    success: {},
    info: {},
    warning: {},
    error: {},
  },
} as const;

export type ThemeType = typeof baseTheme;
