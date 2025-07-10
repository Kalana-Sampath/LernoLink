import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function StudentHome() {
  const [courses, setCourses] = useState([]);
  const [prompt, setPrompt] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    axios.get('http://10.101.165.195/api/courses', {
      headers: { Authorization: `Bearer ${global.token}` }
    }).then(res => setCourses(res.data));
  }, []);

  const enroll = (id) => {
    axios.post(`http://10.101.165.195/api/courses/enroll/${id}`, {}, {
      headers: { Authorization: `Bearer ${global.token}` }
    });
  };

  const fetchSuggestions = async () => {
    const res = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    }, {
      headers: {
        Authorization: `Bearer YOUR_GPT_API_KEY`,
        'Content-Type': 'application/json'
      }
    });
    const reply = res.data.choices[0].message.content;
    setSuggestions(reply.split('\n'));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.header}>Available Courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.course}>
            <Text>{item.title}</Text>
            <Button title="Enroll" onPress={() => enroll(item._id)} />
          </View>
        )}
      />
      <TextInput
        placeholder="What career are you aiming for?"
        style={styles.input}
        onChangeText={setPrompt}
      />
      <Button title="Get Recommendations" onPress={fetchSuggestions} />
      {suggestions.map((s, idx) => <Text key={idx}>{s}</Text>)}
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 20, marginBottom: 10 },
  course: { marginBottom: 10 },
  input: { borderWidth: 1, marginVertical: 10, padding: 8 }
});