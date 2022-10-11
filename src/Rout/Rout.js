import { createBrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart";
import Home from "../Components/Home";
import Quize from "../Components/Quize";
import Vew from "../Components/AllQuize";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {path:'/' ,
    element: <Layout></Layout> ,
     loader: ()=> fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'),

    children: [
        {path:'/' ,element:<Home></Home>},
        {path:'/home' ,element:<Home></Home>},
        {path:'/cart' , element:<Cart></Cart>, loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz') },
        {path:'/item/:id', element:<Quize></Quize>, loader: async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)},
        {path:'/addedproduct' , element:<Vew></Vew> },
        
    ]}
])