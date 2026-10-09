/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Box, Text, CustomTextInput, CustomButton, PressableText } from '@src';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';
import { useTheme } from '@shopify/restyle';
import { Theme } from '@src/theme/theme';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const SignInScreen = () => {
  const theme = useTheme<Theme>();
  const navigation = useNavigation<NavigationProp>();

  return (
   <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.mainBackground }}>
  <Box flex={1} paddingLeft="l" paddingRight="l">

    {/* Main Content */}
    <Box>
      {/*Title*/}
      <Text variant="title">
        Create Account
      </Text>

      {/*Description*/}
      <Text variant="medium" marginTop="xs">
        Start your style journey with us
      </Text>

      {/*Name*/}
      <Box marginTop="xxl">
        <Text marginBottom="s" variant="medium" color="textSecondary">
          Full Name
        </Text>
        <CustomTextInput
          placeholder="Name"
          leftIcon="mail-outline"
        />
      </Box>

      {/*Email*/}
      <Box marginTop="m">
        <Text marginBottom="s" variant="medium" color="textSecondary">
          Email
        </Text>
        <CustomTextInput
          placeholder="Email"
          leftIcon="mail-outline"
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
        />
      </Box>

      {/*Terms*/}
      <Text variant="medium" marginTop="m">
        By signing up, you agree to our Terms of Service and Privacy Policy.
      </Text>

      {/*Create Account Button*/}
      <Box marginTop="m">
        <CustomButton
          title="Create account"
          onPress={() => navigation.navigate('MainTab',{
            screen:'Home'
          })}
        />
      </Box>
    </Box>

    {/* Bottom Section */}
    <Box
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      marginBottom="l"
    >
      <Text
        variant="medium"
        color="textSecondary"
        marginRight="xs"
      >
        Already have an account?
      </Text>

      <PressableText
        text="Sign In"
        onPress={() => navigation.navigate('Login')}
      />
    </Box>

  </Box>
</SafeAreaView>
  );
};

export default SignInScreen;
