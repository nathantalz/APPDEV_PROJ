// import { useEffect, useState } from 'react'
// import { View,
//      Text, 
//      TouchableOpacity, 
//      Alert, 
//      StyleSheet, 
//      Image} from 'react-native'


// import CustomTextInput from '../../components/CustomTextInput';
// import CustomButton from '../../components/CustomButton';
// import { useNavigation } from '@react-navigation/native';
// import { ROUTES } from '../../utils';
// import {userLogin} from '../../app/api/auth';
// import { useDispatch, useSelector } from 'react-redux';
// import {authLogin} from '../../app/reducers/auth';
// import IMG from '../../utils/images';


// const Login = () => {

// const [username, setUsername] = useState('');
// const [password, setPassword] = useState('');


// const navigations = useNavigation();
// const dispatch = useDispatch();
// const auth = useSelector(state => state.auth);


// useEffect(() => {
//     if (!auth.isLoading && auth.isError && auth.error){
//         Alert.alert('Login failed', auth.error);
//     }
// }, 
//     [auth.isLoading, auth.isError, auth.error]);


//   return (
//     <View style={{
//      flex: 1,
//      padding: 20,
//      alignItems: 'center',
//      justifyContent: 'center' }}>
     
//       {/* <Text>Email Address: {emailAdd}</Text>
//       <Text>Password: {password}</Text> */}

//       <Image
//             source={IMG.LOGO2}
//             style={{ width: 240, height: 80, marginBottom: 40 }}
//             resizeMode="contain"
//         />
//      <View style={{
//       width: '100%',
//       }}>

    

//       <CustomTextInput label={'Username'} 
//       placeholder={'Enter Username'} 
//       value={(val) => setUsername(val)}
//       containerStyle={{ 
//         padding: 10,
//       }}
//       textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15}} />

//       <CustomTextInput label={'Password'}
//        placeholder={'Enter Password'}
//        value={(val) => setPassword(val)}
//        containerStyle={{ 
//         padding: 10,
        
//       }}
//       textStyle={{ borderRadius: 10, 
//         color: 'red', 
//         marginLeft: 15}}
//        />
//      </View>

//       <CustomButton label={'LOG IN'} 
//       containerStyle={{   
//       borderWidth:1, 
//       borderRadius: 10,
//       marginVertical: 20,
//       backgroundColor: 'blue',
//       width: '85%',
      
//       }} 
//       textsStyle={{ color: 'white', 
//         fontWeight: 'bold'}}

//       onPress={() => {
//         if (username === '' || password === '') {
//           Alert.alert(
//             'Invalid Credentials', 
//             'Please enter valid username and password');

//             return;
//         }

//         dispatch(authLogin({
//           username: username,
//           password: password,
//         }));

//       }}
//        />

//        <View style={{
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',}}>
            
            
//         <Text> Create an Account </Text>
        
//         <TouchableOpacity onPress={() => navigations.navigate(ROUTES.REGISTER)}>
            
//           <Text style={{color: 'red',
//              fontWeight: 'bold',
//              marginLeft: 10,
//              }}> Register </Text>   

//         </TouchableOpacity>

//       </View>
//     </View>
//   )
// }

// export default Login


import { useEffect, useState } from 'react'
import { 
  View, 
  Text, 
  TouchableOpacity, 
  Alert, 
  StyleSheet, 
  Image, 
  StatusBar 
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import CustomTextInput from '../../components/CustomTextinput';
import CustomButton from '../../components/CustomButton';
import { ROUTES } from '../../utils';
import { authLogin } from '../../app/reducers/auth';
import IMG from '../../utils/images';

const FOX_THEME = {
  orange: '#E67E22',
  dark: '#2C3E50',
  light: '#ECF0F1',
  accent: '#D35400',
};

const Login = () => {
  // Hooks at the top to satisfy React Rules
  const insets = useSafeAreaInsets();
  const navigations = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (!auth.isLoading && auth.isError && auth.error) {
      Alert.alert('Login failed', auth.error);
    }
  }, [auth.isLoading, auth.isError, auth.error]);

  const handleLogin = () => {
    // If these are empty, it means the CustomTextInput isn't updating the state
    if (username === '' || password === '') {
      Alert.alert('Invalid Credentials', 'Please enter valid username and password');
      return;
    }

    dispatch(authLogin({ 
      username: username, 
      password: password 
    }));
  };

  return (
    <View style={[
      styles.mainContainer, 
      { paddingTop: insets.top, paddingBottom: insets.bottom }
    ]}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.headerSection}>
        <Image
          source={IMG.LOGO2}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subText}>Login to your Sly account</Text>
      </View>

      <View style={styles.formSection}>
        <CustomTextInput 
          label={'Username'} 
          placeholder={'Enter Username'} 
          // CHANGED BACK TO YOUR ORIGINAL PROP NAME
          value={(val) => setUsername(val)} 
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText} 
        />

        <CustomTextInput 
          label={'Password'}
          placeholder={'Enter Password'}
          // CHANGED BACK TO YOUR ORIGINAL PROP NAME
          value={(val) => setPassword(val)}
          secureTextEntry={true}
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />

        <CustomButton 
          label={'LOG IN'} 
          containerStyle={styles.loginButton} 
          textsStyle={styles.loginButtonText}
          onPress={handleLogin}
        />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>New to the pack?</Text>
        <TouchableOpacity onPress={() => navigations.navigate(ROUTES.REGISTER)}>
          <Text style={styles.registerLink}> Register Now </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: FOX_THEME.light,
    paddingHorizontal: 25,
    justifyContent: 'center',
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: FOX_THEME.dark,
  },
  subText: {
    fontSize: 16,
    color: '#7F8C8D',
    marginTop: 5,
  },
  formSection: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  inputContainer: {
    marginBottom: 15,
  },
  inputText: {
    borderRadius: 12,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    paddingHorizontal: 15,
    color: 'black', // Set to black so you can see what you type
    height: 50,
  },
  loginButton: {
    backgroundColor: FOX_THEME.orange,
    height: 55,
    borderRadius: 12,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  footerText: {
    color: FOX_THEME.dark,
    fontSize: 15,
  },
  registerLink: {
    color: FOX_THEME.accent,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Login