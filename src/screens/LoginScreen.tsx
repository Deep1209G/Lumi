/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/AppNavigation';
import { signInWithGoogle } from '@src/services/authService';

import {
  Box,
  Text,
  CustomTextInput,
  CustomButton,
  SocialButton,
  Images,
  PressableText,
  useLogin,
} from '@src';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { login: loginUserHook, loading } = useLogin();

  const handleLogin = async () => {
    const result = await loginUserHook(name, password);

    if (result.success) {
      navigation.replace('MainTab', {
        screen: 'Home',
      });
    } else {
      console.log(result.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const user = await signInWithGoogle();

      console.log('Google User:', {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      });

      navigation.replace('MainTab', {
        screen: 'Home',
      });
    } catch (error) {
      console.log('Login failed:', error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Box
        flex={1}
        paddingLeft="l"
        paddingRight="l"
        justifyContent="space-between"
      >
        <Box>
          <Text variant="title">Welcome back</Text>

          <Text variant="medium" marginTop="xs">
            Sign in to continue shopping
          </Text>

          <Box marginTop="xl">
            <Text marginBottom="s" variant="medium" color="textSecondary">
              Username
            </Text>

            <CustomTextInput
              placeholder="Username"
              leftIcon="mail-outline"
              value={name}
              onChangeText={setName}
            />
          </Box>

          <Box marginTop="m">
            <Text marginBottom="s" variant="medium" color="textSecondary">
              Password
            </Text>

            <CustomTextInput
              placeholder="Password"
              leftIcon="lock-closed-outline"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </Box>

          <Box marginTop="m">
            {loading ? (
              <ActivityIndicator size="large" color="#000" />
            ) : (
              <CustomButton title="Sign In" onPress={handleLogin} />
            )}
          </Box>

          <Box
            marginTop="xxl"
            flexDirection="row"
            justifyContent="space-evenly"
          >
            <SocialButton
              source={Images.facebook}
              onPress={() => console.log('facebook')}
            />

            <SocialButton source={Images.google} onPress={handleGoogleLogin} />

            <SocialButton
              source={Images.apple}
              onPress={() => console.log('apple')}
            />
          </Box>
        </Box>

        <Box flexDirection="row" justifyContent="center">
          <Text variant="medium" color="textSecondary">
            Don't have a account?
          </Text>

          <PressableText
            text="Sign Up"
            onPress={() => navigation.navigate('SignIn')}
          />
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default LoginScreen;
