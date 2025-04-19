import { Box, Stack, Typography } from '@mui/material';

const MenuItem = ({ name }) => {
  return (
    <Box className="client-menu-item">
      <Typography variant="menu">{name}</Typography>
    </Box>
  );
};

const MenuParentItem = ({ name }) => {
  return (
    <Box className="client-menu-item -parent">
      <Typography variant="menu">{name}</Typography>
    </Box>
  );
};

const ClientMenu = () => {
  return (
    <Stack direction="row" className="client-menu" spacing={2}>
      <MenuItem name="Home" />
      <MenuItem name="Destination" />
      <MenuParentItem name="Hotel & Ticket" />
      <MenuItem name="About us" />
    </Stack>
  );
};

export default ClientMenu;
