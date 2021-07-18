import React from "react";
import {Col} from "react-bootstrap";

const FooterCopyRights: React.FC = () => {
  return (
      <Col xs={12} className='footer-copy-rights text-center py-2'>
            <span>Copyright © 2021. All Rights Reserved.<span
                className='copy-right'> Powered by SoftVessel</span></span>
      </Col>
  );
}

export default FooterCopyRights;
