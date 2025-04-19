import { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Box, Typography } from '@mui/material';

// import constant and utils
import { defaultLocale, homeImage } from '../utils/constant';
import { HotelContext } from '../state/context/hotelContext';

// import ui components
import { ClientImage } from '../components/client/js/common';
import TourList from '../components/tour/tourList';

// import loading data functions
import { getBestSellerToursFunction } from '../state/dispatchers/tour.dispatcher';

export default function HomeComponent() {
  const { t } = useTranslation(['common']);
  const { dispatch } = useContext(HotelContext);
  const router = useRouter();

  const [tours, setTours] = useState([]);

  const setData = async () => {
    const toursResponse = await getBestSellerToursFunction({ dispatch });
    setTours(toursResponse);
  };

  useEffect(() => {
    setData();
  }, []);

  return (
    <Box className="tourist-home">
      <ClientImage
        src={homeImage || ''}
        width="100%"
        height="200px"
        objectFit="cover"
        alt=""
      >
        <Box className="image-title -absolute">
          <Typography variant="head4">Sapa tour for you</Typography>
        </Box>
      </ClientImage>

      <Box className="home-about-us">
        <Box className="image">
          <ClientImage
            src={homeImage}
            width="100%"
            height="100%"
            alt=""
            style={{
              borderRadius: '3px',
            }}
          ></ClientImage>
        </Box>
        <Box className="content">
          <Box className="title">
            <Typography variant="head3">{t('home.aboutUs')}</Typography>
          </Box>
          <Box className="info">
            <Typography variant="info">
              Established in 2007, after nearly 20 years of establishment and
              development, with more than 2000 5* reviews on Tripadvisor, Lily’s
              Travel is one of the best tour operators in Vietnam and always
              ranked at the TOP of the best travel agencies in Hanoi and the
              whole North of Vietnam. With nearly 20 years of operation, Lily’s
              Travel Agency has been getting close to the mission of making more
              and more foreign tourists come to Vietnam, contributing to
              promoting cultural exchanges and “marketing” the great beauty of
              Vietnam to international guests in the world.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="home-tours">
        <Box className="title">
          <Typography variant="head3">{t('home.tours')}</Typography>
        </Box>
        <TourList tours={tours} t={t} router={router} />
      </Box>
    </Box>
  );
}

export const getServerSideProps = async ({ locale = defaultLocale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
