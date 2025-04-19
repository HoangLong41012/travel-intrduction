import { createContext, useReducer, useEffect } from 'react';
import TouristAction from '../actions';

import initState from '../../utils/initState';

export const HotelContext = createContext();

const initialState = {};

const reducer = (state, action) => {
  function _setState(payload) {
    return { ...state, ...payload };
  }

  switch (action.type) {
    case TouristAction.SET_LOADING:
      return _setState({ loading: action.payload?.loading || false });

    case TouristAction.SET_TOURS:
      return _setState({ tours: action.payload?.tours || [] });

    default:
      return true;
  }
};

export const HotelProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    initState({ state, dispatch });
  }, []);

  return (
    <HotelContext.Provider value={{ state, dispatch }}>
      {props.children}
    </HotelContext.Provider>
  );
};
