"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Theme = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const themeSchema = new mongoose_1.default.Schema({
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
themeSchema.statics.build = (attrs) => {
    return new Theme(attrs);
};
const Theme = mongoose_1.default.model("Theme", themeSchema);
exports.Theme = Theme;
