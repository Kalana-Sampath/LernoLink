import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';

export default function GetStart() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <View style={styles.image}>
          <Image source={require('../assets/images/Logo.png')} style={styles.Logo} />
        </View>

        <TouchableOpacity
          onPress={() => router.push('UserRole')}
          activeOpacity={0.5}
          style={{ borderRadius: 15, marginTop: 120, marginLeft: 10, width: 330, height: 55 }}
        >
          <LinearGradient
            colors={Colors.GRADIENT_PRIMARY}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ color: Colors.WHITE, fontFamily: 'outfit-medium', fontSize: 20, marginLeft: 10 }}>
              Get Start
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: '100%',
    padding: 25,
  },
  image: {
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  Logo: {
    marginLeft: 10,
    width: 230,
    height: 400,
    resizeMode: 'contain',
  },
});