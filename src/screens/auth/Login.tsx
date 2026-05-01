import React, { useEffect, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../../app/reducers/auth';
import IMG from '../../utils/images';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { _signInwithGoogle } from '../../utils/firebase';
import { showError, showInfo, showSuccess } from '../../components/alertMessage';
import CustomTextInput from '../../components/CustomTextinput';
import CustomButton from '../../components/CustomButton';
import { ROUTES } from '../../utils';


const Login: React.FC = () => {

const [username, setUsername] = useState<string | number>('');
const [password, setPassword] = useState<string>('');

const {isLoading, data, isError, error} = useSelector(
  (state:
    {auth: {
      isLoading: boolean,
      isError: boolean,
      error: string | null,
      data:
      {token: string
        user:
        {
          username: string,
          email: string,
          roles: string[],
          verified: boolean,
        }
      }
    }}) =>
      state.auth);



      // status: boolean,
      //   message: string,
      //   data:{
      //     id: number,
      //     username: number | string,
      //     name: string,
      //     data: {
      //       math: number,
      //     }
      //   }

const navigations = useNavigation();
const dispatch = useDispatch();


useEffect(() => {
    if (!isLoading && isError && error){
        Alert.alert('Login failed', error);
    }
},
    [isLoading, isError, error]);


  return (
    <View style={{
     flex: 1,
     padding: 20,
     alignItems: 'center',
     justifyContent: 'center' }}>

      {/* <Text>Email Address: {emailAdd}</Text>
      <Text>Password: {password}</Text> */}

      <Image
            source={IMG.LOGO2}
            style={{ width: 240, height: 80, marginBottom: 40 }}
            resizeMode="contain"
        />
     <View style={{
      width: '100%',
      }}>



      <CustomTextInput label={'Username'} 
      placeholder={'Enter Username'} 
      value={(val: string | number) => setUsername(val)}
      containerStyle={{ 
        padding: 10,
      }}
      textStyle={{ borderRadius: 10, color: 'black', marginLeft: 15}} />

      <CustomTextInput label={'Password'}
       placeholder={'Enter Password'}
       value={(val: string | number) => setPassword(val as string)}
       containerStyle={{ 
        padding: 10,

      }}
      textStyle={{ borderRadius: 10, 
        color: 'red', 
        marginLeft: 15}}
       />
     </View>

      <CustomButton label={'LOG IN'} 
      containerStyle={{   
      borderWidth:1, 
      borderRadius: 10,
      marginVertical: 20,
      backgroundColor: 'blue',
      width: '85%',

      }} 
      textsStyle={{ color: 'white', 
        fontWeight: 'bold'}}

      onPress={() => {
        if (username === '' || password === '') {
          Alert.alert(
            'Invalid Credentials', 
            'Please enter valid username and password');

            return;
        }

        dispatch(authLogin({
          username: username,
          password: password,
        }));

      }}
       />

       <GoogleSigninButton
        //  style={{ width: 212, height: 48 }}
         size={GoogleSigninButton.Size.Wide}
         color={GoogleSigninButton.Color.Dark}
         onPress={async () => {
          // await _signInwithGoogle().then((result) =>{
          //   console.log(result);
          // })
          // .catch((err) => {
          //   Alert.alert('Error', `${err.message}`);
          // }).finally(() => {
          //   Alert.alert('Success', 'Google Sign-In successful');
          // });

          showError({
            title: 'Google Sign-In',
             message: 'Google Sign-In process initiated',
             position: 'top',
            //  position: 'bottom',
             visibilityTime: 3000,
            });
        }}
       />


       <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',}}>


        <Text> Create an Account </Text>

         <TouchableOpacity onPress={() => navigations.navigate(ROUTES.REGISTER)}>

          <Text style={{color: 'red',
             fontWeight: 'bold',
             marginLeft: 10,
             }}> Register </Text>   

        </TouchableOpacity> 

      </View>
    </View>
  )
}

export default Login