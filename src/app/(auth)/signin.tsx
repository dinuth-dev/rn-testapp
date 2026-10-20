import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  return (
    <SafeAreaView className="flex-1">
      <Text className="text-2xl text-blue-500 font-nunito-bold">
        Sign In Page
      </Text>
    </SafeAreaView>
  );
};

export default SignIn;
