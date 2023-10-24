import React from "react";

const Title = ({ title }) => {
  return (
    <div className="mt-10 md:mt-0">
      <h4 className="text-2xl font-bold text-info">{title}</h4>
    </div>
  );
};

export default Title;
