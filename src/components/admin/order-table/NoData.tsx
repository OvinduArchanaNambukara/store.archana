import React from "react";
import {Image} from "react-bootstrap";
import noData from "../../../assets/images/no-data/noData.webp"

const NoData: React.FC = () => {
  return (
      <div className="text-center">
        <Image src={noData} fluid={true} width={200}/>
        <p>No data</p>
      </div>
  );
}

export default NoData;
