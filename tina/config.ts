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
          { type: "string", name: "title", label: "Titolo", isTitle: true, required: true },
          { type: "datetime", name: "date", label: "Data di Pubblicazione", required: true },
          { type: "image", name: "image", label: "Immagine di Copertina" },
          { type: "rich-text", name: "body", label: "Corpo del Testo", isBody: true },
          {
            type: "string",
            name: "auraColor",
            label: "🔮 Energia dell'Articolo",
            options: [
              { value: "deep-purple", label: "Viola Profondo (Standard)" },
              { value: "cosmic-black", label: "Nero Cosmico" },
              { value: "blood-moon", label: "Luna di Sangue (Rosso)" },
              { value: "witch-green", label: "Verde Alchimia" },
            ],
          },
          {
            type: "boolean",
            name: "starryBackground",
            label: "✨ Attiva Sfondo Stellato",
          },
        ],
      },
    ],
  },
});
