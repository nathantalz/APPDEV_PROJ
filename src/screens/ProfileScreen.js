import {Image, Text, View } from 'react-native';
import {IMG} from '../utils';

const ProfileScreen = () => {
    return (
        <View style={{ flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3, borderColor: 'blue' }}>
            <Image style={{ width: 200, height: 200 }} source={{ uri: IMG.LOGO }}  />
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Profile Screen</Text>
        </View>
    );
};

export default ProfileScreen;