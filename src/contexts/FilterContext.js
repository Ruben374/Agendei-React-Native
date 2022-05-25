import React, { createContext, useReducer } from 'react';
import { initialState, FilterReducer } from '../reducers/FilterReducer';

export const FilterContext = createContext();

export default ({ children }) => {
    const [state, dispatch] = useReducer(FilterReducer, initialState);
    return (
        <FilterContext.Provider value={{ state, dispatch }}>
            {children}
        </FilterContext.Provider>
    );
};
