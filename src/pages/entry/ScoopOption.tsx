import React, { ChangeEvent } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

import { instance } from '../../api/backend';

interface Props {
  name: string;
  imagePath: string;
  updateItemCount: (itemName: string, newItemCount: number) => any;
}

const ScoopOption = (props: Props) => {
  const { name, imagePath, updateItemCount } = props;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    updateItemCount(name, parseInt(event.target.value));
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }}>
      <img
        src={`${instance.defaults.baseURL}/${imagePath}`}
        alt={`${name} scoop`}
        style={{ width: '75%' }}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: '10px' }}
      >
        <Form.Label column xs="6" style={{ textAlign: 'right' }}>
          {name}
        </Form.Label>
        <Col xs="5" style={{ textAlign: 'left' }}>
          <Form.Control
            type="number"
            defaultValue={0}
            onChange={(event) => handleChange(event as any)}
          />
        </Col>
      </Form.Group>
    </Col>
  );
};

export default ScoopOption;
