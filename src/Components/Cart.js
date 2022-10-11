import React, { useContext } from "react";
import { Myapi } from "../Layout/Layout";
import QzItem from "./QzItem";



const Cart = () => {
  const lodeApi = useContext(Myapi);
 const quzemanu = lodeApi.data;

 
  return (
    <div className="grid xl:grid-cols-4 mx-auto w-5/6 gap-6">
     {
      quzemanu.map(qz => <QzItem key={qz.id} item = {qz}></QzItem>)
     }
    
    </div>
  );
};

export default Cart;
