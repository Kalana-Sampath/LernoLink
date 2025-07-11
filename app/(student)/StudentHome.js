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
  View
} from 'react-native';

const Home = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 1,
      name: 'Programming',
      courses: [
        {
          id: '1',
          title: 'React Native Basics',
          instructor: 'Kalana Sampath',
          price: 'Rs: 750.00',
          image: 'https://miro.medium.com/v2/resize:fit:700/format:webp/1*1I9A65VYyfXYkFz03RXG7g.png',
          description: 'Learn to build mobile apps with React Native, using JavaScript and reusable components.'
        },
        {
          id: '2',
          title: 'MERN Stack Web Development',
          instructor: 'John Smith',
          price: 'Rs: 950.00',
          image: 'https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg',
          description: 'Master MongoDB, Express.js, React, and Node.js to create powerful web applications.'
        },
        {
          id: '3',
          title: 'Python for Beginners',
          instructor: 'Jane Doe',
          price: 'Rs: 600.00',
          image: 'https://www.learnpython.org/static/img/python-logo.png',
          description: 'A beginner-friendly Python course to build a strong programming foundation.'
        }
      ],
    },
    {
      id: 2,
      name: 'Design',
      courses: [
        {
          id: '4',
          title: 'UI/UX Design Fundamentals',
          instructor: 'Sarah Lee',
          price: 'Rs: 850.00',
          image: 'https://cdn.sanity.io/images/599r6htc/localized/4c857fa6e4d6d90b49f82607d334a2fb889daab8-1200x628.png',
          description: 'Understand the principles of design thinking, UI/UX workflows, and tools like Figma.'
        },
        {
          id: '5',
          title: 'Graphic Design with Canva',
          instructor: 'David Clark',
          price: 'Rs: 500.00',
          image: 'https://static-cse.canva.com/blob/1069106/02CanvaProFeaturesforEveryGraphicDesigner.png',
          description: 'Learn how to create eye-catching designs using Canva’s powerful drag-and-drop features.'
        }
      ],
    }
  ];

  const handleCoursePress = (course) => {
    setSelectedCourse(course);
  };

  const closeModal = () => {
    setSelectedCourse(null);
  };

  const filteredCourses = categories.map(category => ({
    ...category,
    courses: category.courses.filter(course =>
      course.title.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  }));

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.searchContainer}>
        <FontAwesome name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Courses"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={{ marginTop: 20 }}>
          {filteredCourses.map((category) => (
            <View key={category.id} style={styles.categoryContainer}>
              <Text style={styles.categoryTitle}>{category.name}</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.booksScroll}>
                {category.courses.length > 0 ? (
                  category.courses.map((course) => (
                    <TouchableOpacity key={course.id} onPress={() => handleCoursePress(course)}>
                      <View style={styles.bookContainer}>
                        <Image source={{ uri: course.image }} style={styles.bookImage} />
                        <Text style={styles.bookTitle}>{course.title}</Text>
                      </View>
                    </TouchableOpacity>
                  ))
                ) : (
                  <Text style={styles.noResultsText}>No courses found</Text>
                )}
              </ScrollView>
            </View>
          ))}
        </View>
      </ScrollView>

      {selectedCourse && (
        <Modal transparent animationType="slide" visible={true}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity onPress={closeModal} style={styles.closeIcon}>
                <FontAwesome name="times" size={24} color="#ff0000" />
              </TouchableOpacity>

              <Image source={{ uri: selectedCourse.image }} style={styles.modalImage} />
              <Text style={styles.modalTitle}>{selectedCourse.title}</Text>
              <Text style={styles.modalAuthor}>{selectedCourse.instructor}</Text>
              <Text style={styles.modalPrice}>{selectedCourse.price}</Text>
              <Text style={styles.modalDescription}>{selectedCourse.description}</Text>

              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buyButton}>
                  <Text style={styles.buttonText}>Enroll</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.exchangeButton}>
                  <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#f0f0f0', borderRadius: 8, paddingHorizontal: 10, margin: 10 },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, height: 40, fontSize: 16 },
  container: { flexGrow: 1, backgroundColor: '#fff', paddingVertical: 20 },
  categoryContainer: { marginBottom: 20, paddingHorizontal: 15 },
  categoryTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  booksScroll: { flexDirection: 'row' },
  bookContainer: { backgroundColor: '#f9f9f9', borderRadius: 10, padding: 10, marginRight: 15, width: 150, alignItems: 'center' },
  bookImage: { width: 120, height: 100, resizeMode: 'cover', borderRadius: 5 },
  bookTitle: { fontSize: 14, fontWeight: 'bold', textAlign: 'center', marginTop: 5 },
  noResultsText: { fontSize: 14, color: '#777' },
  modalContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' },
  modalContent: { width: 300, backgroundColor: '#fff', borderRadius: 10, padding: 20, alignItems: 'center', position: 'relative' },
  closeIcon: { position: 'absolute', top: 10, right: 10, padding: 5 },
  modalImage: { width: 150, height: 100, borderRadius: 5, marginBottom: 10 },
  modalTitle: { fontSize: 18, fontWeight: 'bold' },
  modalAuthor: { fontSize: 14, color: '#555' },
  modalPrice: { fontSize: 16, fontWeight: 'bold', marginVertical: 5 },
  modalDescription: { fontSize: 12, textAlign: 'center', marginBottom: 10 },
  buttonContainer: { flexDirection: 'row', marginTop: 10 },
  buyButton: { backgroundColor: '#28a745', padding: 10, borderRadius: 5, marginRight: 10 },
  exchangeButton: { backgroundColor: '#007bff', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});

export default Home;
