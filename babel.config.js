module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // ["react-native-worklets-core/plugin"],
    ['module:react-native-dotenv'],
    [
      'react-native-reanimated/plugin',
    ],
  ]
};
