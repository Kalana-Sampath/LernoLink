import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Your existing screens */}
      <Stack.Screen name="index" />
      <Stack.Screen name="UserRole" />

      {/* Auth */}
      <Stack.Screen name="(auth)/StudentSignUp" />
      <Stack.Screen name="(auth)/StudentLogin" />
      <Stack.Screen name="(auth)/InstructorSignUp" />
      <Stack.Screen name="(auth)/InstructorLogin" />

      {/* Student */}
      <Stack.Screen name="(student)/StudentHome" />
      <Stack.Screen name="(student)/EnrolledCourses" />

      {/* Instructor */}
      <Stack.Screen name="(instructor)/InstructorHome" />
      <Stack.Screen name="(instructor)/ManageCourses" />
    </Stack>
  );
}
