import React from 'react';
import { Col, Form } from 'react-bootstrap';

import { instance } from '../../api/backend';

interface Props {
  name: string;
  imagePath: string;
  updateItemCount: (itemName: string, newItemCount: number) => any;
}

const ToppingOption = (props: Props) => {
  const { name, imagePath, updateItemCount } = props;
  return (
    <Col xs={12} sm={6} md={4} lg={2} style={{ textAlign: 'center' }}>
      <img
        src={`${instance.defaults.baseURL}/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: '75%' }}
      />
      <Form.Group controlId={`${name}-topping-checkbox`}>
        <Form.Check
          type="checkbox"
          onChange={(e) => {
            updateItemCount(name, e.target.checked ? 1 : 0);
          }}
          label={name}
        />
      </Form.Group>
    </Col>
  );
};

export default ToppingOption;
