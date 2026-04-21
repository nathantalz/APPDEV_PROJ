import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';

import CustomTextInput from '../../components/CustomTextinput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../utils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const FOX_THEME = {
  orange: '#E67E22',
  dark: '#2C3E50',
  light: '#ECF0F1',
  accent: '#D35400',
} as const;

const Register: React.FC = () => {
  const insets = useSafeAreaInsets();
  const navigations = useNavigation();

  const [fullName, setFullName] = useState<string>('');
  const [emailAdd, setEmailAdd] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  return (
    <View
      style={[
        styles.mainContainer,
        { paddingTop: insets.top + 20, paddingBottom: insets.bottom },
      ]}
    >
      <StatusBar barStyle="dark-content" />

      <View style={styles.headerSection}>
        <Text style={styles.welcomeText}>Join the Pack</Text>
        <Text style={styles.subText}>Create your account to get started</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ width: '100%' }}>
        <View style={styles.formSection}>
          <CustomTextInput
            label={'Full Name'}
            placeholder={'Enter Full Name'}
            value={(val: string) => setFullName(val)}
            containerStyle={styles.inputContainer}
            textStyle={styles.inputText}
          />

          <CustomTextInput
            label={'Email Address'}
            placeholder={'Enter Email Address'}
            value={(val: string) => setEmailAdd(val)}
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

          <CustomTextInput
            label={'Confirm Password'}
            placeholder={'Re-enter Password'}
            value={(val: string) => setConfirmPassword(val)}
            secureTextEntry={true}
            containerStyle={styles.inputContainer}
            textStyle={styles.inputText}
          />

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
              // @ts-expect-error react-navigation typing added later
              navigations.navigate(ROUTES.LOGIN);
            }}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}> Already have an account? </Text>
          <TouchableOpacity
            // @ts-expect-error react-navigation typing added later
            onPress={() => navigations.navigate(ROUTES.LOGIN)}
          >
            <Text style={styles.loginLink}> Login </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

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

export default Register;

