import React, { createContext, useContext, useEffect, useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

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
  refreshUser: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

type Props = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<AppUser | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const auth = getAuth();

  const unsubscribe = onAuthStateChanged(
    auth,
    async firebaseUser => {

      console.log(
        'AUTH CHECK:',
        firebaseUser?.email,
      );

      if (firebaseUser) {
        // Google user
        const appUser: AppUser = {
          uid: firebaseUser.uid,
          name:
            firebaseUser.displayName ||
            'User',
          email:
            firebaseUser.email || '',
          photo:
            firebaseUser.photoURL,
        };

        setUser(appUser);
      } else {

        // Dummy JSON user
        const savedUser =
          await AsyncStorage.getItem(
            'currentUser',
          );
        if (savedUser) {

          const localUser =
            JSON.parse(savedUser);
          const appUser: AppUser = {
            uid: localUser.id,
            name: localUser.name,
            email: localUser.email,
            photo: null,

          };

          setUser(appUser);
        } else {

          setUser(null);
        }
      }

      setLoading(false);
    },
  );
  return unsubscribe;

}, []);


  const logout = async () => {
    const auth = getAuth();

    if (auth.currentUser) {
      await signOut(auth);
    }

    await AsyncStorage.removeItem('token');

    await AsyncStorage.removeItem('isLoggedIn');

    await AsyncStorage.removeItem('currentUser');

    setUser(null);
  };

  const refreshUser = async () => {
  const savedUser =
    await AsyncStorage.getItem(
      'currentUser',
    );
  if (savedUser) {
    const localUser =
      JSON.parse(savedUser);
    setUser({
      uid: localUser.id,
      name: localUser.name,
      email: localUser.email,
      photo: null,
    });
  }
};


  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
