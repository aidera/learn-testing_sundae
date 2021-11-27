import React from 'react';
import { Col } from 'react-bootstrap';

import { instance } from '../../api/backend';

interface Props {
  name: string;
  imagePath: string;
}

const ToppingOption = (props: Props) => {
  const { name, imagePath } = props;
  return (
    <Col xs={12} sm={6} md={4} lg={2} style={{ textAlign: 'center' }}>
      <img
        src={`${instance.defaults.baseURL}/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: '75%' }}
      />
    </Col>
  );
};

export default ToppingOption;
