import React, {useState} from "react";
import Table from "./Table";
import Total from "./Total";
import {Card} from "react-bootstrap";

const TableBody: React.FC = () => {
  const [total, setTotal] = useState<number>(0);

  return (
      <Card.Body className='px-0 px-xl-5 px-md-0'>
        <Table setTotal={setTotal}/>
        <Total total={total}/>
      </Card.Body>
  );
}

export default TableBody;
