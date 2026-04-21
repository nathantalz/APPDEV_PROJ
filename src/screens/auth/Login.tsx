import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import CustomTextInput from '../../components/CustomTextinput';
import CustomButton from '../../components/CustomButton';
import { ROUTES } from '../../utils';
// reducer exports default; keep this import pointing at typed module resolution
import { authLogin } from '../../app/reducers/auth';
import IMG from '../../utils/images';

const FOX_THEME = {
  orange: '#E67E22',
  dark: '#2C3E50',
  light: '#ECF0F1',
  accent: '#D35400',
} as const;

type AuthState = {
  data: unknown;
  isLoading: boolean;
  isError: boolean;
  error?: string | null;
};

const Login: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigations = useNavigation();
  const dispatch = useDispatch();
  const auth = useSelector((state: { auth: AuthState }) => state.auth);

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (!auth.isLoading && auth.isError && auth.error) {
      Alert.alert('Login failed', auth.error);
    }
  }, [auth.isLoading, auth.isError, auth.error]);

  const handleLogin = () => {
    if (username === '' || password === '') {
      Alert.alert(
        'Invalid Credentials',
        'Please enter valid username and password',
      );
      return;
    }

    dispatch(
      authLogin({
        username: username,
        password: password,
      }),
    );
  };

  return (
    <View
      style={[
        styles.mainContainer,
        { paddingTop: insets.top, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar barStyle="dark-content" />

      <View style={styles.headerSection}>
        <Image
          // IMG is a URL string here; RN accepts { uri } sources
          source={{ uri: IMG.LOGO2 }}
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
          value={(val: string) => setUsername(val)}
          containerStyle={styles.inputContainer}
          textStyle={styles.inputText}
        />

        <CustomTextInput
          label={'Password'}
          placeholder={'Enter Password'}
          value={(val: string) => setPassword(val)}
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
        <TouchableOpacity
          // @ts-expect-error react-navigation typing added later
          onPress={() => navigations.navigate(ROUTES.REGISTER)}
        >
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
    color: 'black',
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

export default Login;

