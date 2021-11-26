import React, { ChangeEvent, useState } from 'react';
import { Button, Form, OverlayTrigger, Popover } from 'react-bootstrap';

const SummaryForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsButtonDisabled(!event.target.checked);
  };

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice-cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger
        trigger={['hover', 'focus']}
        placement="right"
        overlay={popover}
      >
        <span className="link-primary">Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  return (
    <Form>
      <Form.Group className="mb-3" controlId="form-checkbox">
        <Form.Check
          onChange={checkboxChangeHandler}
          type="checkbox"
          label={checkboxLabel}
        />
      </Form.Group>
      <Button disabled={isButtonDisabled} variant="primary" type="submit">
        Confirm Order
      </Button>
    </Form>
  );
};

export default SummaryForm;
