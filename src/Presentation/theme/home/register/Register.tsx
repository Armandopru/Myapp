import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ToastAndroid } from 'react-native';
import { RoundedButton } from '../../../components/RoundedButton';
import useViewModel from '../register/viewModel';
import { CustomTextInput } from '../../../components/CusatomTextInput';

export const RegisterScreen = () => {
    const { name, lastname, phone, email, password, confirmPassword, onChange,
    register } = useViewModel();
    return (
    
    <View style={styles.container}>
      <Image
        source={require('../../../../../assets/wall.jpg')}
        style={styles.imageBackground}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../../../assets/Logos.jpg')}
          style={styles.logoImage}
        />
        <Text style={styles.logoText}>Armando Jose</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>REGISTRARSE</Text>
        <CustomTextInput
          image={require('../../../../../assets/user.png')}
          placeholder='Nombres'
          keyboardType='default'
          property='name'
          onChangeText={onChange}
          value={name}
        />
        <CustomTextInput
          image={require('../../../../../assets/users.png')}
          placeholder='Apellidos'
          keyboardType='default'
          property='lastname'
          onChangeText={onChange}
          value={lastname}
        />
        <CustomTextInput
          image={require('../../../../../assets/email.jpg')}
          placeholder='Correo electrónico'
          keyboardType='email-address'
          property='email'
          onChangeText={onChange}
          value={email}
        />
        <CustomTextInput
          image={require('../../../../../assets/phone.png')}
          placeholder='Teléfono'
          keyboardType='numeric'
          property='phone'
          onChangeText={onChange}
          value={phone}
        />
        <CustomTextInput
          image={require('../../../../../assets/pass.jpg')}
          placeholder='Contraseña'
          keyboardType='default'
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />
        <CustomTextInput
          image={require('../../../../../assets/pass.jpg')}
          placeholder='Confirmar Contraseña'
          keyboardType='default'
          property='confirmPassword'
          onChangeText={onChange}
          value={confirmPassword}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 30 ,}}>
          <RoundedButton text='CONFIRMAR' onPress={register} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    bottom: '30%',
  },
  form: {
    width: '100%',
    height: '70%',
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
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
    marginTop: 25,
  },
  formTextInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#AAAAAA',
    marginLeft: 15,
  },
  logoContainer: {
    position: 'absolute',
    alignSelf: 'center',
    top: '5%',
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  logoText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
