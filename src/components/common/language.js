import Image from 'next/image';
import { Box } from '@mui/material';

const Language = () => {
  return (
    <Box>
      <Image
        src="/images/language/vi.png"
        alt="language"
        width={35}
        height={20}
      />
    </Box>
  );
};

export default Language;
