import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { IMG, ROUTES } from '../utils';
import { useNavigation } from '@react-navigation/native';
import { authLogout } from '../app/actions';
import { useDispatch } from 'react-redux';

const HomeScreen: React.FC = () => {
  const navigations = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'red',
      }}
    >
      <Image style={{ width: 200, height: 200 }} source={{ uri: IMG.LOGO }} />
      <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Home Screen</Text>

      <TouchableOpacity
        // keep as-is; will type nav later in migration
        // @ts-expect-error react-navigation typing added later
        onPress={() => navigations.navigate(ROUTES.PROFILE)}
      >
        <View style={{ backgroundColor: 'blue', padding: 10, borderRadius: 99 }}>
          <Text style={{ fontSize: 35, fontWeight: 'bold', color: 'white' }}>
            GO TO PROFILE
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          dispatch(authLogout());
        }}
      >
        <View
          style={{
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 20,
            marginTop: 20,
          }}
        >
          <Text style={{ fontSize: 24, color: 'white' }}>LOG OUT</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

