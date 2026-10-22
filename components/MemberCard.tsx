import { BRANCH_LOGOS, MemberList } from "@/constants/data";
import { icons } from "@/constants/icons";
import { LinearGradient } from "expo-linear-gradient";
import { Image, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";

type DataProps = {
  data: MemberList;
};

const MemberCard = ({
  data: { member_img, name, location, country_code, branch, colors, id },
}: DataProps) => {
  return (
    <LinearGradient
      colors={[colors[0], colors[1], colors[0]]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="member-card"
    >
      <View className="box">
        <View className="member-img-box">
          <Image className="member-img" source={member_img} />
        </View>

        <View className="member-info">
          <Text className="member-name">{name}</Text>
          <Text className="member-location">{location}</Text>

          <View className="member-img-group">
            <CountryFlag isoCode={country_code} size={16} />

            {branch.map((b) => (
              <Image
                key={b}
                source={BRANCH_LOGOS[b]}
                style={{ width: 20, height: 20 }}
                className="branch-logo"
              />
            ))}
          </View>

          <Text className="user-id">{id}</Text>

          <Image
            className="icon"
            source={icons.heart}
            style={{ width: 20, height: 20 }}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default MemberCard;
