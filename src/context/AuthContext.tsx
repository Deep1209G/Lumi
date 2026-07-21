import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export type User = {
  id: string;
  name: string;
  email: string;
};


type AuthContextType = {
  user: User | null;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
};


export const AuthContext = createContext({} as AuthContextType);


type Props = {
  children: React.ReactNode;
};


const USER_KEY = 'currentUser';


export const AuthProvider = ({ children }: Props) => {

  const [user, setUser] = useState<User | null>(null);


  useEffect(() => {
    loadUser();
  }, []);


  const loadUser = async () => {

    const data = await AsyncStorage.getItem(USER_KEY);

    if(data){
      setUser(JSON.parse(data));
    }

  };


  const login = async (userData: User) => {

    await AsyncStorage.setItem(
      USER_KEY,
      JSON.stringify(userData)
    );

    setUser(userData);

  };


  const logout = async () => {

    await AsyncStorage.removeItem(USER_KEY);

    setUser(null);

  };


  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );

};