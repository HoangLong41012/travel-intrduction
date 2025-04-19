import { Stack, Alert } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ErrorToast = ({ message }) => {
  return (
    <Alert
      sx={{
        position: 'fixed',
        top: '9vh',
        left: '0',
        right: '0',
        margin: '0 auto',
        width: 'fit-content',
        py: '0.75rem',
        pl: '0.75rem',
        pr: '1.5rem',
        borderRadius: '0.5rem',
        backgroundColor: '#D30115',
        color: '#FFFFFF',
      }}
      color="error"
      icon={<ErrorIcon sx={{ color: '#FFFFFF' }} />}
    >
      {message}
    </Alert>
  );
};

const SuccessToast = ({ message }) => {
  return (
    <Alert
      sx={{
        position: 'fixed',
        top: '9vh',
        left: '0',
        right: '0',
        margin: '0 auto',
        width: 'fit-content',
        py: '0.75rem',
        pl: '0.75rem',
        pr: '1.5rem',
        backgroundColor: '#2e7d32',
        borderRadius: '0.5rem',
        color: '#FFFFFF',
      }}
      icon={<CheckCircleOutlineIcon sx={{ color: '#FFFFFF' }} />}
      color="success"
    >
      {message}
    </Alert>
  );
};

const ToastMessage = ({ state }) => {
  return (
    <Stack
      sx={{
        position: 'fixed',
        zIndex: 3000,
      }}
    >
      {state.type === 'error' && (
        <ErrorToast message={state.message}></ErrorToast>
      )}
      {state.type === 'success' && (
        <SuccessToast message={state.message}></SuccessToast>
      )}
    </Stack>
  );
};

export default ToastMessage;
