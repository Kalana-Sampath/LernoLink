import axios from 'axios';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function InstructorHome() {
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  useEffect(() => {
    axios.get('http://10.101.165.195/api/courses', {
      headers: { Authorization: `Bearer ${global.token}` }
    }).then(res => {
      const owned = res.data.filter(course => course.instructor?._id === global.userId);
      setCourses(owned);
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Created Courses</Text>
      <Button title="Add New Course" onPress={() => router.push('/(instructor)/ManageCourses')} />
      <FlatList
        data={courses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 20 },
  title: { fontSize: 20, marginBottom: 10 },
  item: { marginBottom: 15 },
  courseTitle: { fontWeight: 'bold' }
});

