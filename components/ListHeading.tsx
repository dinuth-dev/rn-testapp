import { Text, TouchableOpacity, View } from "react-native";

type ListHeadingProps = {
  title: string;
  url: string;
  url_text: string;
};

const ListHeading = ({ title, url, url_text }: ListHeadingProps) => {
  return (
    <View className="list-header">
      <Text className="list-header-title">{title}</Text>
      <TouchableOpacity className="list-header-link">
        <Text className="list-header-text">{url_text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeading;
