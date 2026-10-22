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
    <View className="member-card">
      <View className="box">
        <Image className="member-img" source={member_img}></Image>
        <View>
          <Text className="member-name">{name}</Text>
          <Text className="member-location">{location}</Text>
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
    </View>
  );
};

export default MemberCard;
