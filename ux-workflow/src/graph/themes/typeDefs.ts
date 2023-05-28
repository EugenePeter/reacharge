import gql from "graphql-tag";
export const themesTypeDef = gql`
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
    fontSize: String
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
    full: DimensionsAttrs
  }

  type Themes {
    name: String
    border: Border
    colors: Colors
    font: Font
    dimensions: Dimensions
  }

  type Tasks {
    oid: String
  }

  type Address {
    value: String
  }

  type TrainingCompleted {
    value: String
  }

  type ReportsTo {
    value: String
  }

  type Joined {
    value: String
  }

  type Ratings {
    value: Float
  }

  type Email {
    value: String
  }

  type FullName {
    value: String
    custom: [String]
  }

  type Suburb {
    value: String
    id: String
  }

  type Country {
    value: String
  }

  type Custom {
    name: String
    icon: String
  }

  type State {
    value: String
    custom: [Custom]
  }

  type City {
    value: String
  }

  type LastName {
    value: String
    custom: [Custom]
  }

  type FirstName {
    value: String
  }

  type EmployeeId {
    value: String
  }

  type Id {
    oid: String
  }

  type Config {
    tasks: [Tasks]
    address: Address
    trainingCompleted: TrainingCompleted
    reportsTo: ReportsTo
    joined: Joined
    ratings: Ratings
    email: Email
    fullName: FullName
    suburb: Suburb
    country: Country
    state: State
    city: City
    lastName: LastName
    firstName: FirstName
    employeeId: EmployeeId
    _id: Id
  }

  # Types with identical fields:
  # Tasks Id
  # Address TrainingCompleted ReportsTo Joined Email Country City FirstName EmployeeId
  # State LastName

  extend type Query {
    getTheme(host: String): Themes
    # getUXConfig: [Config]
  }
`;
