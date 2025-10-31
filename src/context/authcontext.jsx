import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

// 新的自訂 Hook 名稱！
export const useAccess = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [user, setUser] = useState(null); 

  const login = (username, password) => {
    // 模擬帳號密碼
    if (username === 'test' && password === '12345') {
      setIsLoggedIn(true);
      setUser({ name: username });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};