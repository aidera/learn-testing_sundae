import React from 'react';
import { Alert } from 'react-bootstrap';

interface Props {
  message?: string;
  variant?: string;
}

const AlertBanner = (props: Props) => {
  const { message, variant } = props;
  const alertMessage =
    message || 'An unexpected error ouucred. Please try again later';
  const alertVariant = variant || 'danger';

  return (
    <Alert variant={alertVariant} style={{ backgroundColor: 'red' }}>
      {alertMessage}
    </Alert>
  );
};

export default AlertBanner;
