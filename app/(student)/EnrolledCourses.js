import axios from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    axios.get('http://10.101.165.195/api/courses/enrolled', {
      headers: { Authorization: `Bearer ${global.token}` }
    }).then(res => setEnrolledCourses(res.data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Enrolled Courses</Text>
      <FlatList
        data={enrolledCourses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.courseItem}>
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
  courseItem: { padding: 10, borderBottomWidth: 1, marginBottom: 10 },
  courseTitle: { fontWeight: 'bold' }
});