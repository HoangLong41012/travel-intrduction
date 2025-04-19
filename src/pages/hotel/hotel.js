import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Stack, Typography } from '@mui/material';

import { defaultLocale } from '../../utils/constant';
import { Language } from '../../components/common';

export default function Hotel() {
  const { t } = useTranslation(['common']);
  return (
    <>
      <Stack
        sx={{
          backgroundColor: '#1E90FF',
          height: '80px',
          position: 'relative',
        }}
      >
        <Typography
          sx={{
            color: '#fff',
            fontWeight: '600',
            fontSize: '22px',
            textAlign: 'center',
            paddingTop: '10px',
          }}
        >
          SAPA HOSPITALITY GROUP
        </Typography>
        <Typography
          sx={{
            color: '#fff',
            fontSize: '16px',
            textAlign: 'center',
          }}
        >
          {t('hotel.hotel')}
        </Typography>
        <div className="login-language">
          <Language />
        </div>
      </Stack>
      <Stack
        sx={{
          minHeight: 'calc(100% - 80px)',
          display: 'flex',
          alignItems: 'center',
        }}
      ></Stack>
    </>
  );
}

export const getServerSideProps = async ({ locale = defaultLocale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
