import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView className="flex-1">
      <Text className="text-2xl text-blue-500 font-nunito-bold">
        Welcome to Home!
      </Text>
      <Link
        href="/(tabs)"
        className="font-base mt-5 rounded bg-black text-white p-4 text-center"
      >
        Home
      </Link>
      <Link
        href="/(tabs)/users"
        className="font-base mt-2 rounded bg-black text-white p-4 text-center"
      >
        Users
      </Link>
      <Link
        href="/(tabs)/settings"
        className="font-base mt-2 rounded bg-black text-white p-4 text-center"
      >
        Settings
      </Link>
      <Link
        href="/(auth)/signin"
        className="font-base mt-2 rounded bg-black text-white p-4 text-center"
      >
        Sign In
      </Link>
      <Link
        href="/(auth)/signup"
        className="font-base mt-2 rounded bg-black text-white p-4 text-center"
      >
        Sign Up
      </Link>
    </SafeAreaView>
  );
}
