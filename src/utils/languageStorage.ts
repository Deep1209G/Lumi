import AsyncStorage from '@react-native-async-storage/async-storage';

const LANGUAGE_KEY = 'selected_language';

export const saveLanguage = async (language: string) => {
  try {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
  } catch (error) {
    console.log('Save Language Error', error);
  }
};

export const getLanguage = async () => {
  try {
    const language = await AsyncStorage.getItem(LANGUAGE_KEY);

    return language ?? 'en';
  } catch (error) {
    console.log('Get Language Error', error);
    return 'en';
  }
};