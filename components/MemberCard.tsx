import { BRANCH_LOGOS, MemberList } from "@/constants/data";
import { Image, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";

type DataProps = {
  data: MemberList;
};

const MemberCard = ({
  data: { member_img, name, location, country_code, branch, id },
}: DataProps) => {
  return (
    <View className="card-item">
      <View className="box">
        <Image className="user-img" source={member_img}></Image>
        <Text className="user-name">{name}</Text>
        <Text className="user-company">{location}</Text>
        <CountryFlag isoCode={country_code} size={20} />
        {branch.map((b) => (
          <Image
            key={b}
            source={BRANCH_LOGOS[b]}
            style={{ width: 24, height: 24 }}
          />
        ))}
        <Text className="user-id">{id}</Text>
      </View>
    </View>
  );
};

export default MemberCard;
