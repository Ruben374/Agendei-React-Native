import React, {createContext, useReducer} from 'react';
import {initialState, EstReducer} from '../reducers/EstReducer';

export const EstContext = createContext();

export default ({children}) => {
  const [state, dispatch] = useReducer(EstReducer, initialState);

  return (
    <EstContext.Provider value={{state, dispatch}}>
      {children}
    </EstContext.Provider>
  );
};
