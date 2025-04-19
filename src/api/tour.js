import _ from 'lodash';
import { getLocalData } from './utils';

export const getAllTours = async () => {
  const tours = await getLocalData('../data/tours.json');

  if (!tours || !tours.length) {
    return [];
  }

  return tours;
};

export const getBestSellerTours = async () => {
  const tours = await getLocalData({ file: '/src/data/tours.json' });

  if (!tours || !tours.length) {
    return [];
  }

  return _.filter(tours, (tour) => {
    // eslint-disable-next-line eqeqeq
    return tour.bestSeller == 1;
  });
};
