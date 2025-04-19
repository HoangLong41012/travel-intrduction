import { Box } from '@mui/material';

import ClientHeader from './header';
import ClientFooter from './footer';

const ClientLayout = ({ children }) => {
  return (
    <Box className="client-layout">
      <ClientHeader />
      <Box className="container">
        {children}
        <ClientFooter />
      </Box>
    </Box>
  );
};

export default ClientLayout;
