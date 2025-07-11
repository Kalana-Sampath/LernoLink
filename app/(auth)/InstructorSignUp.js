import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { LinearGradient } from 'expo-linear-gradient';

import { Colors } from '../../constants/Colors';

export default function InstructorSignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignup = async () => {
    // try {
    //   await axios.post('http://10.101.165.195/api/auth/register', {
    //     username,
    //     email,
    //     password,
    //     role: 'instructor',
    //   });
    router.push('/InstructorLogin');
    ToastAndroid.show('Sign up successful! Please log in.', ToastAndroid.SHORT);
    // } catch (err) {
    //   alert('Error signing up');
    // }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructor Sign Up</Text>

      {/* <TextInput placeholder="Username" style={styles.input} onChangeText={setUsername} /> */}
      <View style={styles.action}>
        <FontAwesome name="user-o" color="#420475" style={styles.smallIcon} />
        <TextInput
          style={styles.input}
          placeholder="UserName"
          placeholderTextColor="#888"
          // value={userName}
          onChangeText={setUsername}
        />
      </View>

      {/* <TextInput placeholder="Email" style={styles.input} onChangeText={setEmail} /> */}
      <View style={styles.action}>
        <FontAwesome name="envelope-o" color="#420475" style={styles.smallIcon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={setEmail} 
        />
      </View>

      {/* <TextInput placeholder="Password" style={styles.input} secureTextEntry onChangeText={setPassword} /> */}
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

      {/* <Button title="Sign Up" onPress={handleSignup} /> */}
      <TouchableOpacity
        onPress={handleSignup}
        activeOpacity={0.5}
        style={{ borderRadius: 15, marginTop: 150, marginLeft: 10, width: 330, height: 55 }}
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
            Sign Up
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

