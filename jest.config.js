module.exports = {
  preset: '@react-native/jest-preset',
  setupFiles: ['<rootDir>/jest.setup.js'],
  forceExit: true,
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|react-redux|redux-persist|react-native-gesture-handler|react-native-screens|@react-native-async-storage)/)',
  ],
};
