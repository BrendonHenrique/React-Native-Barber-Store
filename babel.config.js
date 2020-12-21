module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            pages: "./src/pages",
            routes: "./src/routes",
            configs: "./src/configs",
          },
        },
      ],
    ],
  };
};
