import PageHeading from "@/components/PageHeading";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { useState } from "react";
import {
  Alert,
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

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSignUp = () => {
    if (!name.trim() || !email.trim() || !password || !confirmPassword) {
      Alert.alert("Missing details", "Please complete all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email.trim())) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      Alert.alert(
        "Weak password",
        "Your password must contain at least 8 characters.",
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Password mismatch", "Your passwords do not match.");
      return;
    }

    if (!acceptedTerms) {
      Alert.alert(
        "Terms required",
        "Please accept the Terms of Service and Privacy Policy.",
      );
      return;
    }

    // Connect your registration API here.
    Alert.alert(
      "Ready to register",
      "Connect your authentication API to create your account.",
    );
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
                <Ionicons name="person-outline" size={26} color="#ffffff" />
              </View>

              <View className="flex-row items-center">
                <Text className="font-base text-sm text-gray-500">
                  Already a member?{" "}
                </Text>
                <Link
                  href="/(auth)/signin"
                  className="font-base text-sm text-primary"
                >
                  Sign up
                </Link>
              </View>
            </View>

            {/* Page heading */}
            <View className="mb-10">
              <PageHeading title="Create account ✨" />
              <Text className="font-base text-gray-500">
                Join us today. It only takes a minute.
              </Text>
            </View>

            {/* Full name */}
            <View className="mb-4">
              <Text className="mb-2 font-base text-sm text-black">
                Full name
              </Text>

              <View className="flex-row items-center rounded-xl border border-gray-200 bg-white px-4">
                <Ionicons name="person-outline" size={20} color="#8993a5" />

                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Enter your full name"
                  placeholderTextColor="#9ca3af"
                  autoCapitalize="words"
                  autoComplete="name"
                  textContentType="name"
                  returnKeyType="next"
                  className="min-h-14 flex-1 px-3 font-base text-base text-black"
                />
              </View>
            </View>

            {/* Email */}
            <View className="mb-4">
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
                  placeholder="At least 8 characters"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showPassword}
                  autoComplete="new-password"
                  textContentType="newPassword"
                  returnKeyType="next"
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

            {/* Confirm password */}
            <View className="mb-5">
              <Text className="mb-2 font-base text-sm text-black">
                Confirm password
              </Text>

              <View className="flex-row items-center rounded-xl border border-gray-200 bg-white px-4">
                <Ionicons
                  name="shield-checkmark-outline"
                  size={20}
                  color="#8993a5"
                />

                <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Re-enter your password"
                  placeholderTextColor="#9ca3af"
                  secureTextEntry={!showConfirmPassword}
                  autoComplete="new-password"
                  textContentType="newPassword"
                  returnKeyType="done"
                  onSubmitEditing={handleSignUp}
                  className="min-h-14 flex-1 px-3 font-base text-base text-black"
                />

                <TouchableOpacity
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  accessibilityRole="button"
                  accessibilityLabel={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  hitSlop={10}
                >
                  <Ionicons
                    name={
                      showConfirmPassword ? "eye-off-outline" : "eye-outline"
                    }
                    size={21}
                    color="#8993a5"
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Terms and conditions */}
            <TouchableOpacity
              onPress={() => setAcceptedTerms(!acceptedTerms)}
              className="mb-6 flex-row items-start"
              activeOpacity={0.8}
              accessibilityRole="checkbox"
              accessibilityState={{ checked: acceptedTerms }}
            >
              <View
                className={`mr-3 mt-0.5 h-5 w-5 items-center justify-center rounded border ${
                  acceptedTerms
                    ? "border-primary bg-primary"
                    : "border-gray-300 bg-white"
                }`}
              >
                {acceptedTerms && (
                  <Ionicons name="checkmark" size={14} color="#ffffff" />
                )}
              </View>

              <Text className="flex-1 font-base text-sm leading-5 text-gray-500">
                I agree to the{" "}
                <Text className="text-primary">Terms of Service</Text> and{" "}
                <Text className="text-primary">Privacy Policy</Text>.
              </Text>
            </TouchableOpacity>

            {/* Create account button */}
            <TouchableOpacity
              onPress={handleSignUp}
              activeOpacity={0.8}
              className="min-h-14 flex-row items-center justify-center rounded-xl bg-primary px-4"
            >
              <Text className="font-base text-base text-white">
                Create Account
              </Text>
            </TouchableOpacity>

            {/* Footer */}
            <View className="mt-auto items-center pt-8">
              <Text className="text-center font-base text-xs leading-5 text-gray-400">
                Your information is protected and will only be used to manage
                your account.
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
