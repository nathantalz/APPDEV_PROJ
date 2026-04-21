import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  type StyleProp,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  textsStyle?: StyleProp<TextStyle>;
  label?: string;
  onPress?: () => void;
  loading?: boolean;
};

export default function CustomButton({
  containerStyle,
  textsStyle,
  label = '',
  onPress = () => {},
  loading = false,
}: Props) {
  return (
    <View style={containerStyle}>
      <TouchableOpacity onPress={onPress} disabled={loading}>
        <View
          style={{
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text style={textsStyle}>{label}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

