import { tabs } from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { colors, components } from "@/constants/theme";
import clsx from "clsx";
import { Link, router, Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabBar = components.tabBar;

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  // Drawer state and animation values
  const [menuVisible, setMenuVisible] = useState(false);

  const drawerWidth = Dimensions.get("window").width * 0.82;

  const slideAnim = useRef(new Animated.Value(-drawerWidth)).current;

  const overlayAnim = useRef(new Animated.Value(0)).current;

  // Open drawer
  const openMenu = () => {
    setMenuVisible(true);

    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 400,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnim, {
        toValue: 1,
        duration: 350,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  };

  // Close drawer
  const closeMenu = () => {
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: -drawerWidth,
        duration: 200,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(overlayAnim, {
        toValue: 0,
        duration: 150,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        setMenuVisible(false);
      }
    });
  };

  // Tab icon
  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className="tabs-icon">
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} resizeMode="cover" className="tabs-image" />
        </View>
      </View>
    );
  };

  return (
    <>
      <StatusBar style="dark" />

      {/* Navbar */}
      <View
        className="page-navbar"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          paddingTop: 80,
          zIndex: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={images.main_logo}
          style={{
            width: 140,
            height: 45,
          }}
          resizeMode="contain"
        />

        {/* Open menu button */}
        <TouchableOpacity
          onPress={openMenu}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel="Open navigation menu"
        >
          <Image
            source={icons.list}
            style={{
              width: 38,
              height: 38,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      {/* Sliding menu modal */}
      <Modal
        visible={menuVisible}
        transparent
        animationType="none"
        statusBarTranslucent
        onRequestClose={closeMenu}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          {/* Dark overlay */}
          <Animated.View
            pointerEvents="none"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "#000000",
              opacity: overlayAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
              }),
            }}
          />

          {/* Tap outside to close */}
          <Pressable
            onPress={closeMenu}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          />

          {/* Drawer panel */}
          <Animated.View
            style={{
              width: drawerWidth,
              height: "100%",
              backgroundColor: "#ffffff",
              paddingTop: insets.top + 20,
              paddingHorizontal: 24,
              paddingBottom: Math.max(insets.bottom, 20),
              transform: [
                {
                  translateX: slideAnim,
                },
              ],
              elevation: 50,
              zIndex: 99,
            }}
          >
            {/* Drawer header */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 35,
              }}
            >
              <Image
                source={images.main_logo}
                style={{
                  width: 140,
                  height: 45,
                }}
                resizeMode="contain"
              />

              {/* Close button */}
              <TouchableOpacity
                onPress={closeMenu}
                activeOpacity={0.6}
                accessibilityRole="button"
                accessibilityLabel="Close navigation menu"
                style={{
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  source={icons.x_lg}
                  style={{
                    width: 26,
                    height: 26,
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>

            {/* Menu items from your existing tabs */}
            {tabs.map((tab) => (
              <TouchableOpacity
                key={tab.name}
                onPress={() => {
                  closeMenu();

                  if (tab.name === "index" || tab.name === "home") {
                    router.replace("/(tabs)");
                  } else {
                    router.navigate(`/(tabs)/${tab.name}` as any);
                  }
                }}
                activeOpacity={0.6}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingVertical: 17,
                  borderBottomWidth: 1,
                  borderBottomColor: "#eeeeee",
                }}
              >
                <Text className="menu-item">{tab.title}</Text>
              </TouchableOpacity>
            ))}

            {/* Sign up link */}
            <Link href="/(auth)/signin">
              <Text className="menu-item">Sign In</Text>
            </Link>

            {/* Drawer footer */}
            <View
              style={{
                marginTop: "auto",
                paddingTop: 20,
              }}
            >
              <View
                style={{
                  height: 1,
                  backgroundColor: "#eeeeee",
                  marginBottom: 16,
                }}
              />

              <Text
                style={{
                  fontSize: 12,
                  color: "#888888",
                }}
              >
                Version 1.0.0
              </Text>
            </View>
          </Animated.View>
        </View>
      </Modal>

      {/* Existing bottom tab navigation */}
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,

          tabBarStyle: {
            position: "absolute",
            bottom: Math.max(insets.bottom, tabBar.horizontalInset),
            height: tabBar.height,
            marginHorizontal: tabBar.horizontalInset,
            borderRadius: tabBar.radius,
            backgroundColor: colors.primary,
            borderTopWidth: 0,
            elevation: 0,
          },

          tabBarItemStyle: {
            paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
          },

          tabBarIconStyle: {
            width: tabBar.iconFrame,
            height: tabBar.iconFrame,
            alignItems: "center",
          },
        }}
      >
        {tabs.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              title: tab.title,
              tabBarIcon: ({ focused }) => (
                <TabIcon focused={focused} icon={tab.icon} />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabLayout;
