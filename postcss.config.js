module.exports = {
  plugins: [
    "tailwindcss",
    process.env.NODE_ENV === "production"
      ? [
          "@fullhuman/postcss-purgecss",
          {
            content: [
              "./pages/**/*.{js,jsx,ts,tsx}",
              "./pages/*.tsx",
              "./components/**/*.{js,jsx,ts,tsx}",
              "./components/*.tsx",
            ],
            defaultExtractor: (content) =>
              content.match(/[\w\-:.\/\[#%\]]+(?<!:)/g) || [],
          },
        ]
      : undefined,
    "postcss-preset-env",
  ],
};
