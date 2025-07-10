import axios from 'axios';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function StudentSignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    try {
      await axios.post('http://10.101.165.195/api/auth/register', {
        username,
        email,
        password,
        role: 'student'
      });
      router.push('/(auth)/StudentLogin');
    } catch (err) {
      alert('Error signing up');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Sign Up</Text>
      <TextInput placeholder="Username" style={styles.input} onChangeText={setUsername} />
      <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={setPassword} />
      <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  title: { fontSize: 22, marginBottom: 20 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 8 }
});