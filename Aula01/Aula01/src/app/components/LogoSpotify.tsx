import { Image, View } from 'react-native';

export default function LogoSpotify() {

return (
    <View style={{
      flexDirection: 'row',
      gap: 10,
      marginBottom: 25,
    }}>

      <Image
        source={require('../../../assets/images/Spotify.png')}
        style={{
          width: 400,
          height: 350,
        }}
      />
       </View>
  );
}