import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1 p-5">
      <Text className="text-2xl text-blue-500 font-nunito-bold">
        Sign In Page
      </Text>
      <Link
        href="/(tabs)"
        className="font-base mt-5 rounded bg-black text-white p-4 text-center"
      >
        Home
      </Link>
    </SafeAreaView>
  );
};

export default SignIn;
