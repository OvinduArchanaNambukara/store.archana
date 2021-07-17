import React from "react";
import {Col} from "react-bootstrap";

const Divider: React.FC = () => {
  return (
      <React.Fragment>
        <Col xs={12}>
          <div className="border-bottom mb-3"/>
        </Col>
      </React.Fragment>
  );
}

export default Divider;
