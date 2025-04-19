import { Box, CircularProgress } from '@mui/material';

const Loading = ({ loading = true }) => {
  return (
    loading && (
      <Box
        sx={{
          position: 'fixed',
          height: '100vh',
          width: '100vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000,
          bgcolor: '#fff',
        }}
      >
        <CircularProgress sx={{ color: '#999999' }} />
      </Box>
    )
  );
};

export default Loading;
