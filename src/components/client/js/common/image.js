import { Box } from '@mui/material';
import Image from 'next/image';

const ClientImage = ({
  width,
  height,
  style,
  src,
  objectFit,
  alt,
  children,
}) => {
  return (
    <Box
      className="client-image -relative"
      sx={{
        width,
        height,
      }}
    >
      <Image
        src={src}
        fill
        fetchpriority="high"
        style={{
          objectFit: objectFit || 'cover',
          ...style,
        }}
        alt={alt}
      />
      {children}
    </Box>
  );
};

export default ClientImage;
