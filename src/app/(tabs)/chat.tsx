import PageHeading from "@/components/PageHeading";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Chat = () => {
  return (
    <SafeAreaView className="app-container">
      <PageHeading title="Chat" />
    </SafeAreaView>
  );
};

export default Chat;
