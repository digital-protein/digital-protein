'use client';
import { useRouter } from 'next/navigation';
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState('home');

  return (
    <UserContext.Provider
      value={{
        currentTab,
        setCurrentTab,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};