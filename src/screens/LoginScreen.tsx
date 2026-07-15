import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
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
  const { login, loading } = useLogin();

  const handleLogin = async () => {
    const result = await login(name, password);

    if (result.success) {
      navigation.replace('MainTab', {
        screen: 'Home',
      });
    } else {
      console.log(result.message);
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
          {/*Title*/}
          <Text variant="title">
            Welcome back
          </Text>

          {/*description*/}
          <Text variant="medium" marginTop="xs">
            Sign in to continue shopping
          </Text>

          {/*Email*/}
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

          {/*Password*/}
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

          {/*Forgot Password*/}
          <Box alignItems="flex-end" marginTop="m">
            <PressableText
              text="Forgot Password?"
              onPress={() => console.log('frogot Password')}
            />
          </Box>

          {/*Sign In Button */}
          <Box marginTop="m">
            <CustomButton
              title={loading ? 'Signing In...' : 'Sign In'}
              onPress={handleLogin}
            />
          </Box>

          {/*Or */}
          <Box flexDirection="row" alignItems="center" marginTop="xl">
            <Box flex={1} height={1} backgroundColor="border" />
            <Text variant="description" marginHorizontal="s">
              or continue with
            </Text>
            <Box flex={1} height={1} backgroundColor="border" />
          </Box>

          {/*Social Button */}
          <Box
            marginTop="xxl"
            flexDirection="row"
            justifyContent="space-evenly"
          >
            <SocialButton
              source={Images.facebook}
              onPress={() => console.log('facebook btn')}
            />
            <SocialButton
              source={Images.google}
              onPress={() => console.log('google btn')}
            />
            <SocialButton
              source={Images.apple}
              onPress={() => console.log('apple btn')}
            />
          </Box>
        </Box>

        {/*Dont have a account */}

        <Box flexDirection="row" alignItems="center" justifyContent="center">
          <Text variant="medium" color="textSecondary" marginRight="xs">
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
