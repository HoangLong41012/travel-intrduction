import tourData from '../data/tours.json';
import TouristAction from '../state/actions';

import UI from './ui';

const initState = ({ dispatch }) => {
  UI.startLoading(dispatch);
  dispatch({
    type: TouristAction.SET_TOURS,
    payload: { tours: tourData || [] },
  });
  UI.stopLoading(dispatch);
};

export default initState;
