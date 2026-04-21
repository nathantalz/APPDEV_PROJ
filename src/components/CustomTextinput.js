import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const CustomTextInput = ({
  label,
  placeholder,
  value,
  textStyle,
  containerStyle,
  ...rest
}) => {
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
};

export default CustomTextInput;