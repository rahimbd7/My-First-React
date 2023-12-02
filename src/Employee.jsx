import React from 'react'

const Employee = ({ all:{name, role} }) => {
//   console.log(all.name);
  return (
    <div>
      <h3>Name: {name} </h3>
          <h2>Role:{role }</h2>
    </div>
  );
};

export default Employee
