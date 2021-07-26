import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import {Card} from "react-bootstrap";

const TableArea: React.FC = () => {
  return (
      <Card className='ml-md-4 ml-0 px-3 py-3 my-3 mr-2'>
        <TableHeader/>
        <TableBody/>
      </Card>
  );
}

export default TableArea;
