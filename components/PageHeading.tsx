import { Text, View } from "react-native";

type PageHeadingProps = {
  title: string;
};

const PageHeading = ({ title }: PageHeadingProps) => {
  return (
    <View className="page-header">
      <Text className="page-header-title">{title}</Text>
    </View>
  );
};

export default PageHeading;
