import { Box } from '@mui/material';
import HotelIcon from '../../icons/hotel';

const Logo = ({ size = '16px' }) => {
  return (
    <Box width={size} height={size}>
      <HotelIcon />
    </Box>
  );
};

export default Logo;
