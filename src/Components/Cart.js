import React, { useContext } from "react";
import { Myapi } from "../Layout/Layout";
import QzItem from "./QzItem";

const Cart = () => {
  const lodeApi = useContext(Myapi);
 const quzemanu = lodeApi.data;

 
  return (
    <div className="grid xxl:grid-cols-4 xl:grid-cols-4  lg:grid-cols-2 md:grid-cols-2 mx-auto w-5/6 gap-6">
     {
      quzemanu.map(qz => <QzItem key={qz.id} item = {qz}></QzItem>)
     }
    
    </div>
  );
};

export default Cart;
