import React, {createContext, useState, useEffect, useContext} from 'react';
import {Alert} from 'react-native';


export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const [saveNote, setSaveNote] = useState(false);

  return (
    <AppContext.Provider
      value={{
        saveNote,
        setSaveNote
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
