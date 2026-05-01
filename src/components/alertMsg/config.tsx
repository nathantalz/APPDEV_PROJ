import React from 'react';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      text1Style={{ fontSize: 16, fontWeight: '700' }}
      text2Style={{ fontSize: 14 }}
    />
  ),
  info: (props: any) => (
    <BaseToast
      {...props}
      text1Style={{ fontSize: 16, fontWeight: '700' }}
      text2Style={{ fontSize: 14 }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{ fontSize: 16, fontWeight: '700' }}
      text2Style={{ fontSize: 14 }}
    />
  ),
} as const;

export default toastConfig;