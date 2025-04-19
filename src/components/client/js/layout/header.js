import { Box, Stack } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import ClientMenu from './menu';
import { ClientLanguage } from '../common';

const ClientHeader = ({ children }) => {
  return (
    <Stack direction="row" className="client-header -relative">
      <Box className="logo">Sapa tour</Box>
      <ClientMenu />
      <Stack direction="row" className="actions -absolute" spacing={1}>
        <ClientLanguage></ClientLanguage>
        <MenuIcon className="menu-icon -icon" />
      </Stack>
      {children}
    </Stack>
  );
};

export default ClientHeader;
