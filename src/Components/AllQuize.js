import React, { useState } from 'react';
import Option from './Option';

const AllQuize = ({all}) => {
  // console.log(all);
  // const [option , setOption]= useState([]);

  const {question , options} =all;
  const [on ,to, th, fr]=options;

  // console.log("options", options);

  // console.log("option", option);

  // for(const sum of options){
  //   // console.log('op', sum);
  //   setOption([...option, sum])
  // }
  
  return (
    <div className='bg-slate-200 p-6 m-10 w-3/5 mx-auto'>
      <div>
        {question}
      </div>

      <div className='grid grid-cols-2 gap-5 mt-6'>
        {
          options.map(op => <Option optio={op}></Option>)
        }
        
      </div>
      
    </div>
  );
};

export default AllQuize;
