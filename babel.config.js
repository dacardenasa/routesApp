module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            adapters: "./src/adapters",
            components: "./src/components",
            constants: "./src/constants",
            interfaces: "./src/interfaces",
            navigation: "./src/navigation",
            screens: "./src/screens",
            services: "./src/services",
            state: "./src/state",
            utils: "./src/utils"
          },
        },
      ],
    ],
  };
};
