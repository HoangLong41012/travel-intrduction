import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box, Stack, Typography } from '@mui/material';
import _ from 'lodash';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';

// import constant and utils
import { defaultLocale } from '../../utils/constant';
import { getDisplayName } from '../../utils/data/object';
import { HotelContext } from '../../state/context/hotelContext';

// import ui components
import TourImageSlider from '../../components/tour/tourImageSlider';

// import loading data functions
import { getTourByIdFunction } from '../../state/dispatchers/tour.dispatcher';
import { getLocationDisplay, getDestinationDisplay } from '../../utils/tour';

const TourOverview = ({ tour, t }) => {
  let timeDisplay = 'Full day';
  if (tour.itinerary && tour.itinerary.night) {
    timeDisplay = `${tour.itinerary.day} ${t('day')} and ${tour.itinerary.night} ${t('night')}`;
  }

  return (
    <Box className="content-container overview">
      <Box className="title">
        <Typography variant="head3">{getDisplayName(tour.name)}</Typography>
      </Box>
      <Stack direction="row" spacing={3}>
        <Box className="content-item">
          <AccessTimeOutlinedIcon className="time-icon -icon" />
          {timeDisplay}
        </Box>
        <Box className="content-item">
          <LocationOnOutlinedIcon className="address-icon -icon" />
          {getDestinationDisplay(tour.destination || [])}
        </Box>
        <Box className="content-item">
          <MapOutlinedIcon className="map-icon -icon" />
          {getLocationDisplay(tour.locations || [])}
        </Box>
      </Stack>
    </Box>
  );
};

const TourItineraryItem = ({ item, index }) => {
  const [active, setActive] = useState(true);

  const activeClassName = active ? 'itinerary-item active' : 'itinerary-item';
  return (
    <Box className={activeClassName}>
      <Box
        className="itinerary-title -relative"
        onClick={() => {
          setActive(!active);
        }}
      >
        <KeyboardArrowRightIcon className="-icon -absolute" />
        <Typography variant="head6">
          Day {index + 1}: {getDisplayName(item.title)}
        </Typography>
      </Box>
      <Box className="detail">{getDisplayName(item.content)}</Box>
    </Box>
  );
};

const TourItinerary = ({ t, tour }) => {
  return (
    <Box className="content-container itinerary">
      <Box className="title">
        <Typography variant="head3">{t('tour.itinerary')}</Typography>
      </Box>

      <Box className="itinerary-list">
        {_.map(tour.schedule || [], (i, index) => {
          return <TourItineraryItem key={index} index={index} item={i} />;
        })}
      </Box>
    </Box>
  );
};

export default function TourDetailComponent() {
  const { t } = useTranslation(['common']);
  const { dispatch } = useContext(HotelContext);
  const router = useRouter();
  const { query } = router;

  const [tour, setTour] = useState({});

  const setData = async () => {
    const tourResponse = await getTourByIdFunction({
      dispatch,
      tourId: query.id,
    });
    setTour(tourResponse);
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <Box className="tour-detail-page">
      <TourImageSlider images={tour.images} width="100vw" height="400px" />

      <Stack direction="row" className="tour-detail-content">
        <Box className="menu">
          <Box className="menu-container">
            <Stack spacing={1} className="menu-content">
              <Box className="-item -relative">
                <KeyboardArrowRightIcon className="-icon -absolute" />
                <Typography variant="menu">Over view</Typography>
              </Box>
              <Box className="-item -relative">
                <KeyboardArrowRightIcon className="-icon -absolute" />
                <Typography variant="menu">Itinerary</Typography>
              </Box>
              <Box className="-item -relative">
                <KeyboardArrowRightIcon className="-icon -absolute" />
                <Typography variant="menu">Policy</Typography>
              </Box>
              <Box className="-item -relative">
                <KeyboardArrowRightIcon className="-icon -absolute" />
                <Typography variant="menu">Over view</Typography>
              </Box>
            </Stack>
          </Box>

          <Box className="menu-container -contact">
            <Box className="title">
              <Typography variant="head5">Why Sapa Travel?</Typography>
            </Box>
            <Box className="contact-content">
              <Box className="item -relative">
                <FiberManualRecordIcon className="-icon -absolute" />
                <Box className="item-title">High qualify service</Box>
                <Box className="item-info">
                  We have a lot of good tours for you. Variant destination in
                  north side of Vietnam suchas Hanoi, Sapa, Ninh Binh, ...
                </Box>
              </Box>
              <Box className="item -relative">
                <FiberManualRecordIcon className="-icon -absolute" />
                <Box className="item-title">High qualify service</Box>
                <Box className="item-info">bla bla</Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className="content">
          <TourOverview tour={tour} t={t} />
          <TourItinerary tour={tour} t={t} />
        </Box>
      </Stack>
    </Box>
  );
}

export const getServerSideProps = async ({ locale = defaultLocale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
