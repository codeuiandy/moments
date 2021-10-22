import React, {createContext, useState, useEffect, useContext} from 'react';
import {Alert} from 'react-native';


export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [currentState, setCurrentState] = useState('onboard');
  const [pin, setPin] = useState('');


  useEffect(() => {
    checkIfLoggedIn();
    return () => {
      // console.log('from context');
    };
  }, []);

  const checkIfLoggedIn = async () => {
    // let user = await getData('allUserDetails');
    // if (!user) {
    //   changeCurrentState('onboarding');
   
    // }
  }
  return (
    <AuthContext.Provider
      value={{
        currentState,
        setCurrentState
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};
