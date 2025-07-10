import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Colors } from '../constants/Colors';

export default function UserRole() {
  const [selectedRole, setSelectedRole] = useState(null);
  const router = useRouter();

  const handleContinue = () => {
    if (selectedRole === 'student') {
      router.push('/StudentSignUp');
    } else if (selectedRole === 'instructor') {
      router.push('/InstructorSignUp');
    } else {
      alert('Please select a role before continuing.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Role</Text>

        <View style={styles.row}>
          <Text style={styles.label}>Student</Text>
          <View style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.3 }] }}>
            <Switch
              value={selectedRole === 'student'}
              onValueChange={() => setSelectedRole(selectedRole === 'student' ? null : 'student')}
              trackColor={{ false: '#ccc', true: Colors.PRIMARY }}
              thumbColor="#fff"
            />
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Instructor</Text>
          <View style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.3 }] }}>
            <Switch
              value={selectedRole === 'instructor'}
              onValueChange={() => setSelectedRole(selectedRole === 'instructor' ? null : 'instructor')}
              trackColor={{ false: '#ccc', true: Colors.PRIMARY }}
              thumbColor="#fff"
            />
          </View>
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          style={{ borderRadius: 15, width: 330, height: 55 }}
          onPress={handleContinue}
        >
          <LinearGradient
            colors={Colors.GRADIENT_PRIMARY}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ flex: 1, borderRadius: 15, justifyContent: 'center', alignItems: 'center' }}
          >
            <Text style={{ color: Colors.WHITE, fontFamily: 'outfit-medium', fontSize: 20 }}>
              Continue
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
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontFamily: 'outfit-medium',
    marginTop: 50,
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    justifyContent: 'space-between',
    width: '100%',
  },
  label: {
    flex: 1,
    marginLeft: 15,
    fontSize: 20,
    fontFamily: 'outfit-medium',
    color: '#333',
  },
});
