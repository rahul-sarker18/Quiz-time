import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuize from './AllQuize';

const Quize = () => {
  const lod = useLoaderData()
  const Qzall =lod.data.questions;
  
  return (
    <div>
      <h1 className='text-3xl font-semibold my-3'>{lod.data.name}</h1>
      {
        Qzall.map(itm => <AllQuize key={itm.id} all ={itm} ></AllQuize>)
      }
    </div>
  );
};

export default Quize;