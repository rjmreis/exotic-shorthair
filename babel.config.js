module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        root: '/',
        alias: {
          '~': './src',
        },
        extensions: ['.ts', '.tsx'],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
