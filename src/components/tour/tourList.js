import { Box } from '@mui/material';
import _ from 'lodash';

import TourItem from './tourItem';

const TourList = ({ tours, t, router }) => {
  return (
    <Box className="tour-list">
      {_.map(tours, (tour, index) => {
        return <TourItem key={index} tour={tour} t={t} router={router} />;
      })}
    </Box>
  );
};

export default TourList;
