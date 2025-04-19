import _ from 'lodash';
import toursData from '../../data/tours.json';
import UI from '../../utils/ui';

// eslint-disable-next-line import/prefer-default-export
export const getBestSellerToursFunction = async ({ dispatch }) => {
  UI.startLoading(dispatch);

  if (!toursData || !toursData.length) {
    return [];
  }

  const tours = _.filter(toursData, (tour) => {
    return tour.bestSeller === 1;
  });

  UI.stopLoading(dispatch);

  return tours;
};

export const getTourByIdFunction = async ({ dispatch, tourId }) => {
  UI.startLoading(dispatch);

  const tours = _.filter(toursData, (tour) => {
    return tour.id === tourId;
  });

  if (!tours || !tours.length) {
    return {};
  }

  UI.stopLoading(dispatch);

  return tours[0];
};
