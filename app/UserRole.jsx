import { View, Text, StyleSheet, Switch, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

export default function UserRole() {
  const [selectedRole, setSelectedRole] = useState(null);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Select Your Role</Text>

        {/* STUDENT TOGGLE */}
        <View style={styles.row}>
          {/* <Image
            source={require('../assets/images/student.png')}
            style={[
              styles.icon,
              { tintColor: selectedRole === 'student' ? Colors.PRIMARY : '#555' },
            ]}
          /> */}
          <Text style={styles.label}>Student</Text>
          <View style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.3 }] }} marginRight={6}>
            <Switch
              value={selectedRole === 'student'}
              onValueChange={() =>
                setSelectedRole(selectedRole === 'student' ? null : 'student')
              }
              trackColor={{ false: '#ccc', true: Colors.PRIMARY }}
              thumbColor="#fff"
            />
          </View>
        </View>

        {/* INSTRUCTOR TOGGLE */}
        <View style={styles.row}>
          {/* <Image
            source={require('../assets/images/instructor.png')}
            style={[
              styles.icon,
              { tintColor: selectedRole === 'instructor' ? Colors.PRIMARY : '#555' },
            ]}
          /> */}
          <Text style={styles.label}>Instructor</Text>
          <View style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.3 }] }} marginRight={6}>
            <Switch
              value={selectedRole === 'instructor'}
              onValueChange={() =>
                setSelectedRole(selectedRole === 'instructor' ? null : 'instructor')
              }
              trackColor={{ false: '#ccc', true: Colors.PRIMARY }}
              thumbColor="#fff"
            />
          </View>

        </View>

        {/* CONTINUE BUTTON */}
        <TouchableOpacity
          activeOpacity={0.5}
          style={{
            borderRadius: 15,
            width: 330,
            height: 55,
          }}
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
              }}
            >
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
  icon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },
});
