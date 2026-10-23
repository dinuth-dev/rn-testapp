import PageHeading from "@/components/PageHeading";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSignIn = () => {
    if (!email.trim() || !password) {
      alert("Please enter your email and password.");
      return;
    }

    // Connect your authentication API here.
    // Navigate only after authentication succeeds.
    alert("Connect your authentication API to continue.");
  };

  return (
    <SafeAreaView className="flex-1 bg-light">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View className="flex-1 px-5 py-6">
            {/* Header */}
            <View className="mb-10 flex-row items-center justify-between">
              <View className="h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                <Ionicons name="layers-outline" size={26} color="#ffffff" />
              </View>

              <View className="flex-row items-center">
                <Text className="font-base text-sm text-gray-500">
                  New here?{" "}
                </Text>
                <Link
                  href="/(auth)/signup"
                  className="font-base text-sm text-primary"
                >
                  Sign up
                </Link>
              </View>
            </View>

            {/* Page heading */}
            <View className="mb-10">
              <PageHeading title="Welcome back 👋" />
              <Text className="font-base text-gray-500">
                Sign in to continue to your account.
              </Text>
            </View>

            {/* Email */}
            <View className="mb-5">
              <Text className="mb-2 font-base text-sm text-black">
                Email address
              </Text>

              <View className="flex-row items-center rounded-xl border border-gray-200 bg-white px-4">
                <Ionicons name="mail-outline" size={20} color="#8993a5" />

                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="you@example.com"
                  placeholderTextColor="#9ca3af"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoComplete="email"
                  textContentType="emailAddress"
                  autoCorrect={false}
                  returnKeyType="next"
                  className="min-h-14 flex-1 px-3 font-base text-base text-black"
                />
              </View>
            </View>

            {/* Password */}
            <View className="mb-4">
              <Text className="mb-2 font-base text-sm text-black">
                Password
              </Text>

              <View className="flex-row items-center rounded-xl border border-gray-200 bg-white px-4">
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color="#8993a5"
                />

                <TextInput
                  value={password}
                  onChangeText={setPassword}
                  placeholder="Enter your password"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showPassword}
                  autoComplete="current-password"
                  textContentType="password"
                  returnKeyType="done"
                  onSubmitEditing={handleSignIn}
                  className="min-h-14 flex-1 px-3 font-base text-base text-black"
                />

                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  accessibilityRole="button"
                  accessibilityLabel={
                    showPassword ? "Hide password" : "Show password"
                  }
                  hitSlop={10}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={21}
                    color="#8993a5"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Remember me / Forgot password */}
            <View className="mb-7 flex-row items-center justify-between">
              <TouchableOpacity
                onPress={() => setRememberMe(!rememberMe)}
                className="flex-row items-center"
                accessibilityRole="checkbox"
                accessibilityState={{ checked: rememberMe }}
              >
                <View
                  className={`mr-2 h-5 w-5 items-center justify-center rounded border ${
                    rememberMe
                      ? "border-primary bg-primary"
                      : "border-gray-300 bg-white"
                  }`}
                >
                  {rememberMe && (
                    <Ionicons name="checkmark" size={14} color="#ffffff" />
                  )}
                </View>

                <Text className="font-base text-sm text-gray-600">
                  Remember me
                </Text>
              </TouchableOpacity>

              <Link
                href="/(auth)/signin"
                className="font-base text-sm text-primary"
              >
                Forgot password?
              </Link>
            </View>

            {/* Sign in button */}
            <TouchableOpacity
              onPress={handleSignIn}
              activeOpacity={0.8}
              className="min-h-14 flex-row items-center justify-center rounded-xl bg-primary px-4"
            >
              <Text className="font-base text-base text-white">Sign In</Text>
            </TouchableOpacity>

            {/* Divider */}
            <View className="my-7 flex-row items-center">
              <View className="h-px flex-1 bg-gray-200" />

              <Text className="mx-4 font-base text-xs text-gray-400">
                OR CONTINUE WITH
              </Text>

              <View className="h-px flex-1 bg-gray-200" />
            </View>

            {/* Social sign-in */}
            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={() => alert("Connect Google authentication here.")}
                className="min-h-14 flex-1 flex-row items-center justify-center rounded-xl border border-gray-200 bg-white"
              >
                <Ionicons name="logo-google" size={20} color="#36415a" />

                <Text className="ml-2 font-base text-sm text-black">
                  Google
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => alert("Connect Apple authentication here.")}
                className="min-h-14 flex-1 flex-row items-center justify-center rounded-xl border border-gray-200 bg-white"
              >
                <Ionicons name="logo-apple" size={22} color="#202734" />

                <Text className="ml-2 font-base text-sm text-black">Apple</Text>
              </TouchableOpacity>
            </View>

            {/* Footer */}
            <View className="mt-auto items-center pt-10">
              <Text className="text-center font-base text-xs leading-5 text-gray-400">
                By continuing, you agree to our{" "}
                <Text className="text-primary">Terms of Service</Text> and{" "}
                <Text className="text-primary">Privacy Policy</Text>.
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignIn;
