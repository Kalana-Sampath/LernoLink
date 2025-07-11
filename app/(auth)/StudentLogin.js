import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '../../constants/Colors';

export default function StudentLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();



  const handleLogin = async () => {
    // try {
    //   const res = await axios.post('http://10.101.165.195/api/auth/login', {
    //     email,
    //     password,
    //   });
    // const token = res.data.token;
    // // Save token securely (for real apps use SecureStore or AsyncStorage)
    // global.token = token;
    router.push('/(student)/StudentHome');
    ToastAndroid.show('Login successful!', ToastAndroid.SHORT);
    // } catch (err) {
    //   alert('Invalid login credentials');
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Login</Text>

      <View style={styles.inputWrapper}>
        <View style={styles.action}>
          <FontAwesome name="envelope-o" color="#420475" style={styles.smallIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            onChangeText={setEmail}
          />
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#420475" style={styles.smallIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>
      </View>


      <TouchableOpacity
        onPress={handleLogin}
        activeOpacity={0.5}
        style={{ borderRadius: 15, marginTop: 220, marginLeft: 10, width: 330, height: 55 }}
      >
        <LinearGradient
          colors={Colors.GRADIENT_PRIMARY}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            flex: 1,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: Colors.WHITE,
              fontFamily: 'outfit-medium',
              fontSize: 20,
              marginLeft: 10,
            }}
          >
            Login
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:
  {
    padding: 20,
    marginTop: 0,
    flex: 1,
    backgroundColor: '#fff',
  },
  inputWrapper: {
    marginBottom: 12, // this adds spacing between fields
  },
  title: {
    fontSize: 22,
    marginTop: 250,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 54,
    paddingHorizontal: 10,
    paddingVertical: 0,
    color: '#333',
    fontSize: 16,
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 35,
    paddingHorizontal: 10,
  },
});