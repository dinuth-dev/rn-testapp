import { UserList } from "@/constants/data";
import { Image, Text, View } from "react-native";

type DataProps = {
  data: UserList;
};

const Card = ({
  data: { user_img, name, company_name, user_type },
}: DataProps) => {
  return (
    <View className="card">
      <View className="card-body">
        <Image className="user-img" source={user_img}></Image>
        <Text className="user-name">{name}</Text>
        <Text className="user-company">{company_name}</Text>
        <Text className="user-type">{user_type}</Text>
        {/* <TouchableOpacity>
          <Text>Read more</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default Card;
