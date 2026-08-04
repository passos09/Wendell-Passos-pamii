import { Text, View, StyleSheet } from "react-native";
import LogoSpotify from '../app/components/LogoSpotify';
export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Spotify</Text>
      <LogoSpotify />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
});
