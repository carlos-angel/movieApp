module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'inline-dotenv',
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          constants: './src/constants',
          hooks: './src/hooks',
          navigations: './src/navigations',
          screens: './src/screens',
          services: './src/services',
          utils: './src/utils',
        },
      },
    ],
  ],
};
