import { Box, Stack, Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import LogoIcon from '../../../../icons/logo';
import ZaloIcon from '../../../../icons/static/zalo';
import TravelAdvisorIcon from '../../../../icons/static/travelAdvisor';

const FooterContact = () => {
  return (
    <Box className="footer-contact -item-container">
      <Box className="-item">
        <Box className="title">
          <Typography variant="h5">Contact</Typography>
        </Box>
        <Box className="content">
          <Box className="content-item">
            <LocationOnIcon className="-icon -absolute" />
            So nnh 18 thi tran Sapa, Lao Cai
          </Box>
          <Box className="content-item">
            <PhoneIcon className="-icon -absolute" />
            +84334780299
          </Box>
          <Box className="content-item">
            <EmailIcon className="-icon -absolute" />
            vuhaonglong72@gmail.com
          </Box>
          <Stack direction="row" className="social-icons" spacing={1}>
            <FacebookIcon className="-icon24" />
            <ZaloIcon className="-icon24" />
            <WhatsAppIcon className="-icon24" />
            <TravelAdvisorIcon className="-icon24" />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const FooterDestination = () => {
  return (
    <Box className="footer-destination -item-container">
      <Box className="-item">
        <Box className="title">
          <Typography variant="h5">Destination</Typography>
        </Box>
        <Box className="content">
          <Box className="content-item">
            <KeyboardArrowRightIcon className="-icon -absolute" />
            Sapa
          </Box>
          <Box className="content-item">
            <KeyboardArrowRightIcon className="-icon -absolute" />
            Ha Noi
          </Box>
          <Box className="content-item">
            <KeyboardArrowRightIcon className="-icon -absolute" />
            Ninh Binh
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const ClientFooter = () => {
  return (
    <Box direction="row" className="client-footer -relative">
      <Box className="footer-logo-container">
        <Box className="logo-image">
          <LogoIcon />
        </Box>
        <Box className="logo-name">Sapa travel</Box>
      </Box>
      <Stack className="footer-items">
        <FooterContact />
        <FooterDestination />
      </Stack>
    </Box>
  );
};

export default ClientFooter;
