import Card from "@/components/Card";
import ListHeading from "@/components/ListHeading";
import { USER_LIST } from "@/constants/data";
import images from "@/constants/images";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Image, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5">
      <View className="banner">
        <Image className="banner-img" source={images.thumbnail}></Image>
      </View>

      <ListHeading title="Users" url_text="View all" url="/(tabs)/users" />
      <Card data={USER_LIST[0]} />

      <ListHeading
        title="Notifications"
        url_text="View all"
        url="/(tabs)/notifications"
      />

      <Link href="/(tabs)" className="btn">
        Home
      </Link>
      <Link href="/(tabs)/users" className="btn">
        Users
      </Link>
      <Link href="/(tabs)/settings" className="btn">
        Settings
      </Link>
      <Link href="/(tabs)/notifications" className="btn">
        Notifications
      </Link>
      <Link href="/(auth)/signin" className="btn">
        Sign In
      </Link>
      <Link href="/(auth)/signup" className="btn">
        Sign Up
      </Link>
    </SafeAreaView>
  );
}
