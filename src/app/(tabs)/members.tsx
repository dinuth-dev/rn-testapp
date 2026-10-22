import MemberCard from "@/components/MemberCard";
import PageHeading from "@/components/PageHeading";
import { MEMBER_LIST } from "@/constants/data";
import { styled } from "nativewind";
import { FlatList, Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Members = () => {
  return (
    <SafeAreaView className="p-5">
      <PageHeading title="Members" />
      <FlatList
        data={MEMBER_LIST}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <MemberCard data={item} />}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="text-gray-500">No user data!</Text>
        }
      />
    </SafeAreaView>
  );
};

export default Members;
