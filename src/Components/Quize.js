import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuize from './AllQuize';

const Quize = () => {
  const lod = useLoaderData()
  const Qzall =lod.data.questions;
  
  return (
    <div>
      {
        Qzall.map(itm => <AllQuize key={itm.id} all ={itm} ></AllQuize>)
      }
    </div>
  );
};

export default Quize;