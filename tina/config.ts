import { defineConfig } from "tinacms";

export default defineConfig({
  branch: process.env.VERCEL_GIT_COMMIT_REF || "main",
  clientId: process.env.TINA_CLIENT_ID || null,
  token: process.env.TINA_TOKEN || null,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Articoli del Blog",
        path: "src/content/posts",
        format: "md",
        fields: [
          { type: "string", name: "title", label: "Title", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Publication Date", required: true },
          { type: "image", name: "image", label: "Cover Image" },
          { type: "rich-text", name: "body", label: "Body Text", isBody: true },
          {
            type: "string",
            name: "auraColor",
            label: "🔮 Article Energy",
            options: [
              { value: "deep-purple", label: "Deep Purple (Standard)" },
              { value: "cosmic-black", label: "Cosmic Black" },
              { value: "blood-moon", label: "Blood Moon (Red)" },
              { value: "witch-green", label: "Alchemy Green" },
            ],
          },
          {
            type: "boolean",
            name: "starryBackground",
            label: "✨ Activate Starry Background",
          },
        ],
      },
    ],
  },
});
