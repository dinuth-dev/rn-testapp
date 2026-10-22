import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Chat = () => {
  return (
    <SafeAreaView className="flex-1 p-5">
      <Text className="text-2xl text-blue-500 font-nunito-bold">Chat Page</Text>
    </SafeAreaView>
  );
};

export default Chat;
