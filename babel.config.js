module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "@babel/preset-typescript"],
    plugins: [
      ["nativewind/babel"],
      [
        "module-resolver",
        {
          alias: {
            screens: "./src/screens",
            components: "./src/components",
            constants: "./src/constants",
            api: "./src/api",
            hooks: "./src/hooks",
          },
          extensions: [".ts", ".tsx"],
        },
      ],
    ],
  };
};
