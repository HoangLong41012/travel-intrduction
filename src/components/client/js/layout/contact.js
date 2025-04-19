import { Box, Stack } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';

const ClientContact = ({ children }) => {
  return (
    <Stack className="client-contact">
      <Box>Sapa central tour</Box>
      <Box className="-relative">
        <PhoneIcon className="-absolute -icon" />
        <Box>+84334780299</Box>
      </Box>

      <Box className="-relative">
        <MailIcon className="-absolute -icon" />
        <Box>+84334780299</Box>
      </Box>
      {children}
    </Stack>
  );
};

export default ClientContact;
