import 'react-native-gesture-handler/jestSetup';
import React from 'react';

jest.mock('@react-native-async-storage/async-storage', () => {
  let store = {};
  return {
    __esModule: true,
    default: {
      getItem: jest.fn(key => Promise.resolve(store[key] ?? null)),
      setItem: jest.fn((key, value) => {
        store[key] = String(value);
        return Promise.resolve(null);
      }),
      removeItem: jest.fn(key => {
        delete store[key];
        return Promise.resolve(null);
      }),
      clear: jest.fn(() => {
        store = {};
        return Promise.resolve(null);
      }),
      getAllKeys: jest.fn(() => Promise.resolve(Object.keys(store))),
    },
  };
});

jest.mock('react-native-screens', () => ({
  enableScreens: jest.fn(),
  screensEnabled: jest.fn(() => false),
  Screen: ({ children }) => children ?? null,
  ScreenContainer: ({ children }) => children ?? null,
  NativeScreen: ({ children }) => children ?? null,
}));

jest.mock('@react-navigation/native', () => ({
  NavigationContainer: ({ children }) => children ?? null,
  useNavigation: () => ({ navigate: jest.fn(), goBack: jest.fn() }),
}));

jest.mock('@react-navigation/stack', () => ({
  createStackNavigator: () => ({
    Navigator: ({ children }) => children ?? null,
    Screen: ({ children }) => children ?? null,
  }),
}));

