import { Link, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UserDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <SafeAreaView className="flex-1">
      <Text className="text-2xl text-blue-500 font-nunito-bold">
        User Details Page: {id}
      </Text>
      <Link
        href="/(tabs)"
        className="font-base mt-5 rounded bg-black text-white p-4 text-center"
      >
        Back to Home
      </Link>
    </SafeAreaView>
  );
};

export default UserDetails;
