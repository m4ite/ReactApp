import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Logo from "../assets/reactIcon.png"
import LoginInput from '../components/LoginInput';
import app from '../firebaseconfig.js';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth'

export default function Cadastro() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth(app)

  useEffect(() => 
  {
    console.log(auth.currentUser)
  },[auth.currentUser])

  const validateEmail = (value) => {
    setEmail(value)
  }

  const validatePassword = (value) => {
    setPassword(value)
    }

    const criarUsuario = () => {
        createUserWithEmailAndPassword(auth, email, password).then((dadosDoUsuario) => console.log(dadosDoUsuario)).catch((err)=> console.error(err))
    }

  return (
    <View style={styles.container}>
      <Image
        source={Logo}
        style={{ width: 100, height: 100 }} />

      <LoginInput
        value={email}
        placeholder='E-mail'
        func={(text) => validateEmail(text)}
        style={styles.input} />

      <LoginInput
        value={password}
        placeholder='Password'
        func={(text) => validatePassword(text)}
        style={styles.input}
        secure />

          <TouchableOpacity onPress={ criarUsuario }>
        <View style={styles.button}>
          <Text style={styles.buttoText}>Login</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#46387C',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30
  },
  button: {
    backgroundColor: '#00D8FF',
    width: 156, 
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  buttoText: {
    color: '#302850',
    fontSize: 16,
    fontWeight: 500
  }
});