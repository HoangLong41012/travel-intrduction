import { Box, Typography, Button } from '@mui/material';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

import { ClientImage } from '../client/js/common';

import { getDisplayName } from '../../utils/data/object';
import { getLocationDisplay, getDestinationDisplay } from '../../utils/tour';
import { handleDirectToTourDetail } from '../../utils/redirect';

const TourItem = ({ tour, t, router }) => {
  let timeDisplay = 'Full day';
  if (tour.itinerary && tour.itinerary.night) {
    timeDisplay = `${tour.itinerary.day} ${t('day')} and ${tour.itinerary.night} ${t('night')}`;
  }

  return (
    <Box className="tour-item">
      <Box className="tour-container">
        <Box className="image-container">
          <ClientImage
            src={tour.images && tour.images.length ? tour.images[0] : ''}
            width="100%"
            height="250px"
            objectFit="cover"
            alt=""
          ></ClientImage>
        </Box>
        <Box className="content-container">
          <Box className="content-name">
            <Typography variant="head5">{getDisplayName(tour.name)}</Typography>
          </Box>
          <Box className="content-address">
            <LocationOnOutlinedIcon className="address-icon -icon" />
            {getDestinationDisplay(tour.destination || [])}
          </Box>
          <Box className="content-address">
            <MapOutlinedIcon className="map-icon -icon" />
            {getLocationDisplay(tour.locations || [])}
          </Box>
          <Box className="content-describe">
            <AccessTimeOutlinedIcon className="-icon" />
            {timeDisplay}
          </Box>
          <Box className="content-price">
            <Typography variant="head2">
              {tour.price} {tour.unit} <span>/{t('pax')}</span>
            </Typography>
          </Box>
          <Box className="content-view">
            <Button
              className="view-button -cta"
              variant="contained"
              color="theme"
              onClick={() => {
                handleDirectToTourDetail(router, tour.id);
              }}
            >
              {t('viewDetail')}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default TourItem;
