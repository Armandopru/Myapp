import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
      source={require('./assets/wall.jpg')}
      style={styles.imageBackground}
      />
      <View style={styles.logoC}>
        <Image
        source={require('./assets/Logos.jpg')}
        style={styles.logoImage}
        />
        <Text style={styles.logoT}>S R M Express</Text>
      </View>
      <View style={styles.form}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground:{
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%'
  },
  form:{ 
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  logoC:{
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
  },
  logoImage:{
    width: 130,
    height: 150,
  },
  logoT:{
    color: 'white',
    textAlign:'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    fontStyle:'italic',
    
  }

});
