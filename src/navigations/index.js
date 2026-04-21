//utils
import { NavigationContainer } from '@react-navigation/native';
import { useEffect } from 'react';
import { Platform, StatusBar, useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';

import MainNav from './MainNav';
import AuthNav from './AuthNav';


 export default () => {
    const isDarkMode = useColorScheme() === 'dark';
    const auth = useSelector(state => state.auth);
    const isLoggedIn = !!auth?.data;
   
    useEffect(() => {
        if(Platform.OS === 'android') {
            
            StatusBar.setBarStyle('dark-content', true);
        }
    }, [isDarkMode]);


    
    return (
        <NavigationContainer>
       {/* {data && data.access_token ? <AuthNav /> : <MainNav />} */}
       {isLoggedIn ? <MainNav /> : <AuthNav />}
        </NavigationContainer>
    )
 }