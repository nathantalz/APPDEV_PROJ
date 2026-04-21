import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import MainNav from './MainNav';
import AuthNav from './AuthNav';

type AuthState = {
  data: unknown;
};

export default function Navigation() {
  const isDarkMode = useColorScheme() === 'dark';
  const auth = useSelector((state: { auth: AuthState }) => state.auth);
  const isLoggedIn = !!auth?.data;

  useEffect(() => {
    if (Platform.OS === 'android') {
      StatusBar.setBarStyle('dark-content', true);
    }
  }, [isDarkMode]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainNav /> : <AuthNav />}
    </NavigationContainer>
  );
}

