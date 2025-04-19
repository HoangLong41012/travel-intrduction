import _ from 'lodash';

export const getIsLoadingFromState = (state) => {
  return _.get(state, 'isLoading') || false;
};

export const getToursFromState = (state) => {
  return _.getState(state, 'tours');
};
