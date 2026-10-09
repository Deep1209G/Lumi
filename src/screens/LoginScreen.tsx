/* eslint-disable react-native/no-inline-styles */

import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { RootStackParamList } from '../navigation/AppNavigation';
import { signInWithGoogle } from '@src/services/authService';

import { useTheme } from '@shopify/restyle';
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
import { Theme } from '@src/theme/theme';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const LoginScreen = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<NavigationProp>();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const { login: loginUserHook, loading } = useLogin();

  const handleLogin = async () => {
    const trimmedName = name.trim();
    const trimmedPassword = password.trim();

    let hasError = false;

    if (!trimmedName) {
      setNameError('Username is required');
      hasError = true;
    } else {
      setNameError('');
    }

    if (!trimmedPassword) {
      setPasswordError('Password is required');
      hasError = true;
    } else {
      setPasswordError('');
    }

    if (hasError) return;

    const result = await loginUserHook(trimmedName, trimmedPassword);

    if (result.success) {
      navigation.replace('MainTab', {
        screen: 'Home',
      });
    } else {
      setPasswordError(result.message || 'Invalid credentials');
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
    <SafeAreaView style={{ flex: 1, backgroundColor:theme.colors.mainBackground }}>
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
              onChangeText={text => { setName(text); setNameError(''); }}
            />
            {!!nameError && (
              <Text variant="small" color="warning" marginTop="xs">
                {nameError}
              </Text>
            )}
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
              onChangeText={text => { setPassword(text); setPasswordError(''); }}
            />
            {!!passwordError && (
              <Text variant="small" color="warning" marginTop="xs">
                {passwordError}
              </Text>
            )}
          </Box>

          <Box marginTop="m">
            {loading ? (
              <ActivityIndicator size="large" color={theme.colors.black} />
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
