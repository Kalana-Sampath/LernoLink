import axios from 'axios';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function ManageCourses() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleCreate = async () => {
    await axios.post('http://10.101.165.195/api/courses', {
      title, description, content
    }, {
      headers: { Authorization: `Bearer ${global.token}` }
    });
    alert('Course Created!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create New Course</Text>
      <TextInput placeholder="Title" style={styles.input} onChangeText={setTitle} />
      <TextInput placeholder="Description" style={styles.input} onChangeText={setDescription} />
      <TextInput placeholder="Content" style={styles.input} onChangeText={setContent} />
      <Button title="Create Course" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 20 },
  header: { fontSize: 20, marginBottom: 10 },
  input: { borderBottomWidth: 1, marginBottom: 10, padding: 8 }
});