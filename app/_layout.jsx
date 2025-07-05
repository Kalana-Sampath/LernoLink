import { Stack } from "expo-router";
import UserRole from './UserRole'
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false}}  />
      <Stack.Screen name="UserRole" options={{ headerShown: false }} />
    </Stack>
  )
}