import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithCredential,
} from '@react-native-firebase/auth';


export const signInWithGoogle = async () => {
  try {

    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });


    const response = await GoogleSignin.signIn();


    const idToken = response.data?.idToken;


    if (!idToken) {
      throw new Error('No ID token found');
    }


    const tokens = await GoogleSignin.getTokens();


    console.log(
      "ID Token:",
      !!tokens.idToken
    );

    console.log(
      "Access Token:",
      !!tokens.accessToken
    );


    const credential =
      GoogleAuthProvider.credential(
        tokens.idToken,
        tokens.accessToken
      );


    const auth = getAuth();


    const result =
      await signInWithCredential(
        auth,
        credential
      );


    console.log(
      "Firebase User:",
      result.user.email
    );


    return result.user;


  } catch(error) {

    console.log(
      "Google Sign In Error:",
      error
    );

    throw error;
  }
};
