import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Users = () => {
  return (
    <SafeAreaView className="flex-1">
      <Text className="text-2xl text-blue-500 font-nunito-bold">
        Users Page
      </Text>
    </SafeAreaView>
  );
};

export default Users;
