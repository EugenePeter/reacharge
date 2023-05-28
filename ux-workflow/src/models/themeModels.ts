import mongoose, { Types } from "mongoose";

export type ColorTypes =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "light"
  | "dark";

type ColorDefinitionKeys =
  | "lightest"
  | "lighter"
  | "light"
  | "DEFAULT"
  | "dark"
  | "darker"
  | "darkest";

export type ColorDefinition = {
  [P in ColorDefinitionKeys]: string;
};

export interface SizeDef {
  fontSize: string;
  fontWeight: string;
}
export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
type TSize = {
  [P in Sizes]: SizeDef;
};

interface Font {
  URL: string;
  family: string;
  size: TSize;
}

// An interface that describes the properties
// that are required to create a theme
interface ThemeAttrs {
  hostID: Types.ObjectId;
}

// An interface that describes the properties
// that a Theme Model has
interface ThemeModel extends mongoose.Model<ThemeDocument> {
  build(attrs: ThemeAttrs): ThemeDocument;
}

// An interface that describes the properties
// that a Theme Documents has
interface ThemeDocument extends mongoose.Document {
  name: string;
  border: {
    width: string;
    radius: string;
  };
  colors: {
    [P in ColorTypes]: ColorDefinition;
  };
  font: Font;
  dimensions: {
    [P in Sizes]: {
      width: string;
      height: string;
      containerHeight: string;
    };
  };
}

const themeSchema = new mongoose.Schema({
  name: String,
  border: {
    width: {
      type: String,
      required: true,
    },
    radius: {
      type: String,
      required: true,
    },
  },
  colors: {
    primary: {
      lightest: String,
      lighter: String,
      light: String,
      DEFAULT: String,
      dark: String,
      darker: String,
      darkest: String,
    },
    secondary: {
      lightest: String,
      lighter: String,
      light: String,
      DEFAULT: String,
      dark: String,
      darker: String,
      darkest: String,
    },
    success: {
      lightest: String,
      lighter: String,
      light: String,
      DEFAULT: String,
      dark: String,
      darker: String,
      darkest: String,
    },
    warning: {
      lightest: String,
      lighter: String,
      light: String,
      DEFAULT: String,
      dark: String,
      darker: String,
      darkest: String,
    },
    danger: {
      lightest: String,
      lighter: String,
      light: String,
      DEFAULT: String,
      dark: String,
      darker: String,
      darkest: String,
    },
    light: {
      lightest: String,
      lighter: String,
      light: String,
      DEFAULT: String,
      dark: String,
      darker: String,
      darkest: String,
    },
    dark: {
      lightest: String,
      lighter: String,
      light: String,
      DEFAULT: String,
      dark: String,
      darker: String,
      darkest: String,
    },
  },
  font: {
    URL: String,
    family: String,
    size: {
      xs: {
        fontSize: String,
        fontWeight: Number,
      },
      sm: {
        fontSize: String,
        fontWeight: Number,
      },
      md: {
        fontSize: String,
        fontWeight: Number,
      },
      lg: {
        fontSize: String,
        fontWeight: Number,
      },
      xl: {
        fontSize: String,
        fontWeight: Number,
      },
    },
  },
  dimensions: {
    xs: {
      width: String,
      height: String,
      containerHeight: String,
    },
    sm: {
      width: String,
      height: String,
      containerHeight: String,
    },
    md: {
      width: String,
      height: String,
      containerHeight: String,
    },
    lg: {
      width: String,
      height: String,
      containerHeight: String,
    },
    xl: {
      width: String,
      height: String,
      containerHeight: String,
    },
    full: {
      width: String,
      height: String,
      containerHeight: String,
    },
  },
});

themeSchema.statics.build = (attrs: ThemeAttrs) => {
  return new Theme(attrs);
};

const Theme = mongoose.model<ThemeDocument, ThemeModel>("Theme", themeSchema);

export { Theme };
