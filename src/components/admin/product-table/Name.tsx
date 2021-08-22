import React from "react";

type NameProps = {
  name: string
}

const Name: React.FC<NameProps> = (props) => {
  const {name} = props;

  return (
      <p>{name}</p>
  );
}

export default Name;
