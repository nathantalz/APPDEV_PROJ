import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({ containerStyle, textsStyle, label, onPress}) => {
  return (
    <View style={containerStyle}>
        <TouchableOpacity onPress={onPress}>
        <View
         style={{

          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
        
         }}>
          <Text style={textsStyle}>
           {label}
          </Text>
        </View>
</TouchableOpacity>
      </View>
  )
}

export default CustomButton