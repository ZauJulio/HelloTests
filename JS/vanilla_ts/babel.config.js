module.exports = {
  presets: [
    [
      "@babel/preset-env",
      { targets: { node: "current", chrome: "57", esmodules: true } },
    ],
    "@babel/preset-typescript",
  ],
  exclude: ["./plugins/**/*", "./typings/**/*", "./built/**/*"],
};
