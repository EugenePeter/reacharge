export const vancanciesTypeDef = `
type Border {
  width: Int
  radius: String
}

type ColorShade {
  lightest: String
  lighter: String
  light: String
  DEFAULT: String
  dark: String
  darker: String
  darkest: String
}

type Colors {
  primary: ColorShade
  secondary: ColorShade
  success: ColorShade
  warning: ColorShade
  danger: ColorShade
  light: ColorShade
  dark: ColorShade
}

type SizeAttrs {
  fontSize:  String
  fontWeight: String
}

type Size {
  xs: SizeAttrs
  sm: SizeAttrs
  md: SizeAttrs
  lg: SizeAttrs
  xl: SizeAttrs
}

type Font {
  URL: String
  family: String
  size: Size
}

type DimensionsAttrs {
  width: String
  height: String
  containerHeight: String
}
type Dimensions {
  xs: DimensionsAttrs
  sm: DimensionsAttrs
  md: DimensionsAttrs
  lg: DimensionsAttrs
  xl: DimensionsAttrs
  full:  DimensionsAttrs
}

type Themes {
  name: String
  border: Border
  colors: Colors
  font: Font
  dimensions: Dimensions
}


 extend type Query {
  getTheme(host: String): Themes
}
`;
