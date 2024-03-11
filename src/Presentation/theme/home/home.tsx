import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import { RoundedButton } from '../../../Presentation/components/RoundedButton';
import { CustomTextInput } from '../../components/CusatomTextInput';
import useViewModel from '../../../viewModel';
import styles from '../home/Styles';


type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

export const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const { email, password, onChange } = useViewModel();

  const handleLogin = () => {
    console.log('Email: ' + email);
    console.log('Password: ' + password);
    // Add login logic here
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../../assets/wall.jpg')} style={styles.imageBackground} />
      <View style={styles.logoContainer}>
        <Image source={require('../../../../assets/Logos.jpg')} style={styles.logoImage} />
        <Text style={styles.logoText}>Armando Jose</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.formText}>INGRESAR</Text>
        <CustomTextInput
          image={require('../../../../assets/email.jpg')}
          placeholder='Correo electrónico'
          keyboardType='email-address'
          property='email'
          onChangeText={onChange}
          value={email}
        />
        <CustomTextInput
          image={require('../../../../assets/pass.jpg')}
          placeholder='Contraseña'
          keyboardType='default'
          property='password'
          onChangeText={onChange}
          value={password}
          secureTextEntry={true}
        />
        <View style={{ marginTop: 30 }}>
          <RoundedButton text='ENTRAR' onPress={handleLogin} />
        </View>
        <View style={styles.formRegister}>
          <Text>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
            <Text style={styles.formRegisterText}>Regístrate</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

