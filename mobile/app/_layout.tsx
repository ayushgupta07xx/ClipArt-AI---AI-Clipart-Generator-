import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" translucent={false} backgroundColor="#0A0A0A" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#0A0A0A' },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: { fontWeight: '700', fontSize: 17 },
          contentStyle: { backgroundColor: '#0A0A0A' },
          ...(Platform.OS === 'android' && {
            statusBarStyle: 'light',
            statusBarColor: '#0A0A0A',
            navigationBarColor: '#0A0A0A',
          }),
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false, animation: 'fade' }} />
        <Stack.Screen name="results" options={{ headerShown: false }} />
        <Stack.Screen name="single" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
