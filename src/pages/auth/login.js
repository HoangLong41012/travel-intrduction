import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Stack, Typography, Button, Box } from '@mui/material';

import { defaultLocale } from '../../utils/constant';
import { Language, HInput, HInputLabel, Logo } from '../../components/common';
import Google from '../../icons/google';

export default function Login() {
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
          variant="head3"
          sx={{
            color: '#fff',
            textAlign: 'center',
            paddingTop: '10px',
          }}
        >
          SAPA HOSPITALITY GROUP
        </Typography>
        <Typography
          variant="head6"
          sx={{
            color: '#fff',
            textAlign: 'center',
          }}
        >
          {t('login')}
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
      >
        <Stack
          mt={2}
          sx={{
            width: '400px',
            backgroundColor: '#fff',
            height: '400px',
            padding: '20px',
            borderRadius: '3px',
            boxShadow: '0px 0px 2px 0px rgba(0, 0, 0, 0.15)',
          }}
        >
          <Stack
            sx={{
              position: 'relative',
              padding: '0px 20px 10px 80px',
              height: '60px',
            }}
          >
            <Box sx={{ position: 'absolute', top: '0px', left: '0px' }}>
              <Logo size="60px" />
            </Box>
            <Typography mt={0.5} variant="title">
              {t('welcome')}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: 'var(--info-text-color)',
              }}
            >
              {t('welcomeInfo')}
            </Typography>
          </Stack>

          <Stack mt={1}>
            <HInputLabel required>{t('phone')}</HInputLabel>
            <HInput
              hiddenlabel="true"
              placeholder={t('enterPhone')}
              sx={{
                marginTop: '5px',
              }}
            ></HInput>
          </Stack>

          <Stack mt={1}>
            <HInputLabel type="password" sx={{ color: '#000' }}>
              {t('password')}
            </HInputLabel>
            <HInput
              hiddenlabel="true"
              placeholder={t('enterPassword')}
              sx={{
                marginTop: '5px',
              }}
            ></HInput>
          </Stack>
          <Stack mt={1} className="login-forget-password">
            {t('forgetPassword')}
          </Stack>

          <Stack mt={1}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'var(--theme-color)',
                fontSize: '14px',
                lineHeight: '1.25rem',
                marginTop: '10px',
              }}
            >
              {t('login')}
            </Button>
            <Button
              variant="outlined"
              startIcon={<Google />}
              sx={{
                color: 'var(--theme-color)',
                fontSize: '14px',
                lineHeight: '1.25rem',
                marginTop: '10px',
              }}
            >
              {t('loginGoogle')}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export const getServerSideProps = async ({ locale = defaultLocale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});
