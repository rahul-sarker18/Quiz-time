import React from 'react';

const AllQuize = ({all}) => {
  console.log(all);
  const {question , options} =all;
  console.log(options);
  return (
    <div className='bg-slate-200 p-6 m-10 w-3/5 mx-auto'>
      <div>
        {question}
      </div>
      <div>
        
      </div>
      
    </div>
  );
};

export default AllQuize;
