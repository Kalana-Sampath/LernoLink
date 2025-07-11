import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const AddCourse = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [instructor, setInstructor] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [courses, setCourses] = useState([]);

  const handleAddCourse = () => {
    const newCourse = {
      id: Date.now().toString(),
      title,
      instructor,
      price,
      description,
      image: imageUrl,
    };

    setCourses([...courses, newCourse]);

    // Clear form and close modal
    setTitle('');
    setInstructor('');
    setPrice('');
    setDescription('');
    setImageUrl('');
    setModalVisible(false);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Course List */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.pageTitle}>Add New Course</Text>

        {courses.map((course) => (
          <View key={course.id} style={styles.courseCard}>
            <Image source={{ uri: course.image }} style={styles.courseImage} />
            <View style={{ flex: 1 }}>
              <Text style={styles.courseTitle}>{course.title}</Text>
              <Text style={styles.courseInstructor}>By {course.instructor}</Text>
              <Text style={styles.coursePrice}>{course.price}</Text>
              <Text style={styles.courseDescription}>{course.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Plus Button (Bottom Center) */}
      <TouchableOpacity style={styles.plusButton} onPress={() => setModalVisible(true)}>
        <FontAwesome name="plus" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Modal for Adding New Course */}
      <Modal animationType="slide" transparent visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeIcon} onPress={() => setModalVisible(false)}>
              <FontAwesome name="times" size={24} color="red" />
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Course Details</Text>

            <TextInput
              placeholder="Course Title"
              style={styles.input}
              value={title}
              onChangeText={setTitle}
            />
            <TextInput
              placeholder="Instructor Name"
              style={styles.input}
              value={instructor}
              onChangeText={setInstructor}
            />
            <TextInput
              placeholder="Price (e.g., Rs: 500.00)"
              style={styles.input}
              value={price}
              onChangeText={setPrice}
            />
            <TextInput
              placeholder="Course Description"
              style={[styles.input, { height: 80 }]}
              multiline
              value={description}
              onChangeText={setDescription}
            />
            <TextInput
              placeholder="Image URL"
              style={styles.input}
              value={imageUrl}
              onChangeText={setImageUrl}
            />

            <TouchableOpacity style={styles.submitButton} onPress={handleAddCourse}>
              <Text style={styles.buttonText}>Add Course</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80, // leave space for the button
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  plusButton: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#007bff', // blue color
    padding: 18,
    borderRadius: 50,
    zIndex: 10,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  courseCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    marginBottom: 15,
    padding: 10,
    alignItems: 'center',
  },
  courseImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 6,
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  courseInstructor: {
    color: '#555',
    fontSize: 13,
  },
  coursePrice: {
    color: '#28a745',
    fontWeight: 'bold',
    marginVertical: 4,
  },
  courseDescription: {
    fontSize: 12,
    color: '#444',
  },
});

export default AddCourse;
