import React from 'react';
import { View, Text, type StyleProp, type TextStyle, type ViewStyle } from 'react-native';
import { TextInput, type TextInputProps } from 'react-native-gesture-handler';

type Props = Omit<TextInputProps, 'onChangeText'> & {
  label?: string;
  placeholder?: string;
  /**
   * Matches your current app usage: `value` is a callback invoked by `onChangeText`.
   * We'll switch this to the conventional `value` string later during migration.
   */
  value?: (text: string) => void;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
};

export default function CustomTextInput({
  label,
  placeholder,
  value,
  textStyle,
  containerStyle,
  ...rest
}: Props) {
  return (
    <View style={containerStyle}>
      <Text style={{ fontWeight: 'bold' }}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={value}
        style={[textStyle, { width: '100%', borderBottomWidth: 1 }]}
        {...rest}
      />
    </View>
  );
}

