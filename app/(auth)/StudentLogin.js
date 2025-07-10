import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://10.101.165.195/api/auth/login', {
        email,
        password,
      });
      const token = res.data.token;
      // Save token securely (for real apps use SecureStore or AsyncStorage)
      global.token = token;
      router.push('/(student)/StudentHome');
    } catch (err) {
      alert('Invalid login credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Login</Text>
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 8 }
});