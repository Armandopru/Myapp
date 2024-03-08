import React, { useState} from 'react';
import { View, Text, TextInput, Image, Button, StyleSheet, ToastAndroid } from 'react-native';
export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
        <Text style={styles.logoT}>Armando Torres</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <View style={styles.formInput}>
          <Image style={styles.formIcon}
            source={require('./assets/email.jpg')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Correo electrónico'
            keyboardType='email-address'
            value={email}
            onChangeText={ text => setEmail(text)}
          />
        </View>
        <View style={styles.formInput}>
          <Image style={styles.formIcon}
            source={require('./assets/pass.jpg')}
          />
          <TextInput
            style={styles.formTextInput}
            placeholder='Contraseña'
            keyboardType='default'
            secureTextEntry={true}
            value={password}
            onChangeText={ text => setPassword(text)}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Button
            title='ENTRAR'
            onPress={() => {ToastAndroid.show('PPT 1404402', ToastAndroid.LONG)
            console.log('Email: ' + email);
            console.log('Password: ' + password);}}
            color={'green'}
          />
        </View>
        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <Text style={styles.formRegisterText}>Regístrate</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '10%',
  },
  form: {
    width: '100%',
    height: '40%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
    opacity: 1,
  },
  formText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  formIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  formInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginLeft: 15,
  },
  formRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: 'italic',
    color: 'red',
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  logoC: {
    position: 'absolute',
    alignSelf: 'center',
    top: '15%',
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  logoT: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
