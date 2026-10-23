import PageHeading from "@/components/PageHeading";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Profile = () => {
  return (
    <SafeAreaView className="app-container">
      <PageHeading title="Profile" />
      <Link href="/(auth)/signin" className="btn">
        Sign In
      </Link>
      <Link href="/(auth)/signup" className="btn">
        Sign Up
      </Link>
    </SafeAreaView>
  );
};

export default Profile;
