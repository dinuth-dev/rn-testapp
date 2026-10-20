import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Notifications = () => {
  return (
    <SafeAreaView className="flex-1">
      <Text className="text-2xl text-blue-500 font-nunito-bold">
        Notifications Page
      </Text>
    </SafeAreaView>
  );
};

export default Notifications;
