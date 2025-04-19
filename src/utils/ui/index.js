import TouristAction from '../../state/actions';

const startLoading = (dispatch) => {
  dispatch({
    type: TouristAction.SET_LOADING,
    payload: { loading: true },
  });
};

const stopLoading = (dispatch) => {
  dispatch({
    type: TouristAction.SET_LOADING,
    payload: { loading: false },
  });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  startLoading,
  stopLoading,
};
