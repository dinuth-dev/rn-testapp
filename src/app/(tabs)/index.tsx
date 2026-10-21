import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5">
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
        href="/(tabs)/notifications"
        className="font-base mt-2 rounded bg-black text-white p-4 text-center"
      >
        Notifications
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
