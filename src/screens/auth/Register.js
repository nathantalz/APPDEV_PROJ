// import { useState } from 'react'
// import { View, Text, TouchableOpacity, Alert } from 'react-native'

// import CustomTextInput from '../../components/CustomTextInput'
// import CustomButton from '../../components/CustomButton'
// import { useNavigation } from '@react-navigation/native'
// import { ROUTES } from '../../utils'

// const Register = () => {
//   // 1. Added more state variables for registration
//   const [fullName, setFullName] = useState('');
//   const [emailAdd, setEmailAdd] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const navigations = useNavigation();

//   return (
//     <View style={{
//       flex: 1,
//       padding: 20,
//       alignItems: 'center',
//       justifyContent: 'center'
//     }}>

//       <View style={{ width: '100%' }}>
        
//         {/* Full Name Field */}
//         <CustomTextInput 
//           label={'Full Name'} 
//           placeholder={'Enter Full Name'} 
//           value={(val) => setFullName(val)}
//           containerStyle={{ padding: 10 }}
//           textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }} 
//         />

//         {/* Email Field */}
//         <CustomTextInput 
//           label={'Email Address'} 
//           placeholder={'Enter Email Address'} 
//           value={(val) => setEmailAdd(val)}
//           containerStyle={{ padding: 10 }}
//           textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }} 
//         />

//         {/* Password Field */}
//         <CustomTextInput 
//           label={'Password'}
//           placeholder={'Enter Password'}
//           value={(val) => setPassword(val)}
//           containerStyle={{ padding: 10 }}
//           textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }}
//         />

//         {/* Confirm Password Field */}
//         <CustomTextInput 
//           label={'Confirm Password'}
//           placeholder={'Re-enter Password'}
//           value={(val) => setConfirmPassword(val)}
//           containerStyle={{ padding: 10 }}
//           textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15 }}
//         />
//       </View>

//       {/* Register Button */}
//       <CustomButton 
//         label={'REGISTER'} 
//         containerStyle={{   
//           borderWidth: 1, 
//           borderRadius: 10,
//           marginVertical: 20,
//           backgroundColor: 'blue',
//           width: '85%',
//         }} 
//         textsStyle={{ color: 'white', fontWeight: 'bold' }}
//         onPress={() => {
//           // Validation Logic
//           if (fullName === '' || emailAdd === '' || password === '') {
//             Alert.alert('Error', 'Please fill in all fields');
//             return;
//           }
//           if (password !== confirmPassword) {
//             Alert.alert('Error', 'Passwords do not match');
//             return;
//           }
          
//           Alert.alert('Success', 'Account Created Successfully!');
//           navigations.navigate(ROUTES.LOGIN); // Navigate back to login
//         }}
//       />

      
//       {/* <View style={{
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}>
//         <Text> Already have an account? </Text>
//         <TouchableOpacity onPress={() => navigations.navigate(ROUTES.LOGIN)}>
//           <Text style={{
//             color: 'red',
//             fontWeight: 'bold',
//             marginLeft: 10,
//           }}> Login </Text>   
//         </TouchableOpacity>
//       </View> */}

//     </View>
//   )
// }

// export default Register



import { useState } from 'react'
import { View, Text, TouchableOpacity, Alert, StyleSheet, StatusBar, ScrollView } from 'react-native'

import CustomTextInput from '../../components/CustomTextinput'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import { ROUTES } from '../../utils'
// Fixed: Added safe area hook to match the Login fix
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FOX_THEME = {
  orange: '#E67E22',
  dark: '#2C3E50',
  light: '#ECF0F1',
  accent: '#D35400',
};

const Register = () => {
  // 1. Hooks at the top (Ensures functionality & follows React rules)
  const insets = useSafeAreaInsets();
  const navigations = useNavigation();

  const [fullName, setFullName] = useState('');
  const [emailAdd, setEmailAdd] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <View style={[
      styles.mainContainer, 
      { paddingTop: insets.top + 20, paddingBottom: insets.bottom }
    ]}>
      <StatusBar barStyle="dark-content" />
      
      {/* Design Header */}
      <View style={styles.headerSection}>
        <Text style={styles.welcomeText}>Join the Pack</Text>
        <Text style={styles.subText}>Create your account to get started</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
        <View style={styles.formSection}>
          
          {/* Full Name Field - Logic strictly preserved */}
          <CustomTextInput 
            label={'Full Name'} 
            placeholder={'Enter Full Name'} 
            value={(val) => setFullName(val)}
            containerStyle={styles.inputContainer}
            textStyle={styles.inputText} 
          />

          {/* Email Field - Logic strictly preserved */}
          <CustomTextInput 
            label={'Email Address'} 
            placeholder={'Enter Email Address'} 
            value={(val) => setEmailAdd(val)}
            containerStyle={styles.inputContainer}
            textStyle={styles.inputText} 
          />

          {/* Password Field - Logic strictly preserved */}
          <CustomTextInput 
            label={'Password'}
            placeholder={'Enter Password'}
            value={(val) => setPassword(val)}
            secureTextEntry={true}
            containerStyle={styles.inputContainer}
            textStyle={styles.inputText}
          />

          {/* Confirm Password Field - Logic strictly preserved */}
          <CustomTextInput 
            label={'Confirm Password'}
            placeholder={'Re-enter Password'}
            value={(val) => setConfirmPassword(val)}
            secureTextEntry={true}
            containerStyle={styles.inputContainer}
            textStyle={styles.inputText}
          />

          {/* Register Button - Logic strictly preserved */}
          <CustomButton 
            label={'REGISTER'} 
            containerStyle={styles.registerButton} 
            textsStyle={styles.registerButtonText}
            onPress={() => {
              if (fullName === '' || emailAdd === '' || password === '') {
                Alert.alert('Error', 'Please fill in all fields');
                return;
              }
              if (password !== confirmPassword) {
                Alert.alert('Error', 'Passwords do not match');
                return;
              }
              
              Alert.alert('Success', 'Account Created Successfully!');
              navigations.navigate(ROUTES.LOGIN); 
            }}
          />
        </View>

        {/* Footer Link */}
        <View style={styles.footer}>
          <Text style={styles.footerText}> Already have an account? </Text>
          <TouchableOpacity onPress={() => navigations.navigate(ROUTES.LOGIN)}>
            <Text style={styles.loginLink}> Login </Text>   
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: FOX_THEME.light,
    paddingHorizontal: 25,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 20,
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
    marginBottom: 10,
  },
  inputText: {
    borderRadius: 12,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    paddingHorizontal: 15,
    color: 'black',
    height: 50,
  },
  registerButton: {
    backgroundColor: FOX_THEME.orange,
    height: 55,
    borderRadius: 12,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  footerText: {
    color: FOX_THEME.dark,
    fontSize: 15,
  },
  loginLink: {
    color: FOX_THEME.accent,
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Register