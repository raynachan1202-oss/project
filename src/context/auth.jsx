import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  auth, 
  signInWithGooglePopup,
  signOut,
  onAuthStateChanged,
  createUserDocumentFromAuth,
} from '@components/firebase';


const AuthContext = createContext();


export const useAccess = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const [isLoading, setIsLoading] = useState(true);

  
  const signInWithGoogle = async () => {
    try {
      
      const response = await signInWithGooglePopup(); 
      console.log(response);
      
      const { user } = response;
      
      const userDocRef = await createUserDocumentFromAuth(user); 
      

      return { success: true, userDocRef }; 
    } catch (error) {
      console.error("Google 登入失敗:", error);
      
      return { success: false, error: error.message }; 
    }
  };
  
  
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("登出失敗", error);
    }
  };

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return () => unsubscribe(); 
  }, []);

  const isLoggedIn = !!user; 

  return (
    <AuthContext.Provider 
      value={{ 
        isLoggedIn, 
        user, 
        signInWithGoogle,
        logout 
      }}
    >
      {!isLoading && children}
    </AuthContext.Provider>
  );
};