import _ from 'lodash';
import { getDisplayName } from '../data/object';
import { destinations } from '../constant';

export const getLocationDisplay = (locations) => {
  if (locations.length === 0) {
    return '---';
  }

  const locationNames = _.map(locations, (location) => {
    return getDisplayName(location);
  });

  return _.trim(_.join(locationNames, ', '));
};

export const getDestinationDisplay = (destination) => {
  const destinationObj = _.find(destinations, (d) => {
    return d.id === destination;
  });

  if (!destinationObj) {
    return '---';
  }

  return getDisplayName(destinationObj);
};
