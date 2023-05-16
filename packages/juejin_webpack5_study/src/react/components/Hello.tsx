import React from "react";

interface IProps {
  message?: string;
}

const Hello: React.FC<IProps> = () => {
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
export default Hello;
