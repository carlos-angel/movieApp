module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    'inline-dotenv',
    [
      'module-resolver',
      {
        alias: {
          components: './src/components',
          context: './src/context',
          constants: './src/constants',
          hooks: './src/hooks',
          navigations: './src/navigations',
          screens: './src/screens',
          services: './src/services',
          utils: './src/utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
