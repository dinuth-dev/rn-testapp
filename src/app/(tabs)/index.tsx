import ListHeading from "@/components/ListHeading";
import MemberCard from "@/components/MemberCard";
import UserCard from "@/components/UserCard";
import { MEMBER_LIST, USER_LIST } from "@/constants/data";
import images from "@/constants/images";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="p-5">
      <View className="banner">
        <Image className="banner-img" source={images.thumbnail}></Image>
      </View>

      <ListHeading title="Users" url_text="View all" url="/(tabs)/users" />
      <FlatList
        data={USER_LIST}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <UserCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="text-gray-500">No user data!</Text>
        }
        contentContainerStyle={{ alignItems: "center" }}
      />

      <ListHeading title="Members" url_text="View all" url="/(tabs)/members" />
      <FlatList
        data={MEMBER_LIST}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MemberCard data={item} />}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="text-gray-500">No user data!</Text>
        }
      />

      <Link href="/(auth)/signin" className="btn">
        Sign In
      </Link>
      <Link href="/(auth)/signup" className="btn">
        Sign Up
      </Link>
    </SafeAreaView>
  );
}
