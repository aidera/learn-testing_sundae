import React, { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";

const SummaryForm = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setIsButtonDisabled(!event.target.checked);
  };

  const checkboxLabel = (
    <span>
      I agree to <span className="link-primary">Terms and Conditions</span>
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
