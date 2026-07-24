import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from '@react-native-firebase/auth';

import { AppUser } from '@src/types/user';


type AuthContextType = {
  user: AppUser | null;
  loading: boolean;
  logout: () => Promise<void>;
};


export const AuthContext =
  createContext<AuthContextType>(
    {} as AuthContextType
  );


type Props = {
  children: React.ReactNode;
};


export const AuthProvider = ({
  children,
}: Props) => {


  const [user, setUser] =
    useState<AppUser | null>(null);


  const [loading, setLoading] =
    useState(true);



  useEffect(() => {

    const auth = getAuth();


    const unsubscribe =
      onAuthStateChanged(
        auth,
        firebaseUser => {


          if (firebaseUser) {


            const appUser: AppUser = {

              uid: firebaseUser.uid,

              name:
                firebaseUser.displayName
                || 'User',

              email:
                firebaseUser.email
                || '',

              photo:
                firebaseUser.photoURL,

            };


            setUser(appUser);


          } else {

            setUser(null);

          }


          setLoading(false);

        }
      );


    return unsubscribe;


  }, []);



  const logout = async () => {

    const auth = getAuth();

    await signOut(auth);

    setUser(null);

  };



  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

};



export const useAuth = () =>
  useContext(AuthContext);
