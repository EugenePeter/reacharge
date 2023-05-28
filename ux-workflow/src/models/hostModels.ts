import mongoose from "mongoose";

// An interface that describes the properties
// that are required to create a theme
interface ThemeAttrs {
  URL: string;
  id: string;
}

// An interface that describes the properties
// that a Theme Model has
interface ThemeModel extends mongoose.Model<ThemeDocument> {
  build(attrs: ThemeAttrs): ThemeDocument;
}

// An interface that describes the properties
// that a Theme Documents has
interface ThemeDocument extends mongoose.Document {
  URL: string;
  id: string;
}

const themeSchema = new mongoose.Schema({
  URL: {
    type: String,
    required: true,
  },
  id: {
    type: String,
  },
});

themeSchema.statics.build = (attrs: ThemeAttrs) => {
  return new Name(attrs);
};

const Name = mongoose.model<ThemeDocument, ThemeModel>("name", themeSchema);

export { Name };
