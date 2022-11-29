import React, { useContext, createContext, useState, useEffect } from 'react';
import { 
  onAuthStateChanged, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
 } from 'firebase/auth';
 import { auth } from '../firebase-config'

 const AuthContext = createContext()

 export const AuthContextProvider = ({children}) => {
  const [user, setUser] = useState({})
 

 const createUserEmailPassword = (email, password) => {
  const user = createUserWithEmailAndPassword(auth, email, password)
  return user
 }

 const logOut = () => {
  signOut(auth)
  window.localStorage.removeItem('username')
 }

 useEffect(() => {
  const unsuscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser)
    console.log('User', currentUser)
  })
  return () => {
    unsuscribe()
  }
 }, [])

 return(
  <AuthContext.Provider value = {{ createUserEmailPassword, logOut, user }}>
    {children}
  </AuthContext.Provider>
 )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}