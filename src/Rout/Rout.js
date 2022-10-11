import { createBrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart";
import Home from "../Components/Home";
import Quize from "../Components/Quize";
import Vew from "../Components/AllQuize";
import Layout from "../Layout/Layout";
import About from "../Components/About";
import Cheart from "../Components/Cheart";

export const router = createBrowserRouter([
    {path:'/' ,
    element: <Layout></Layout> ,
    loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz') ,
    children: [
        {path:'/' ,element:<Home></Home>},
        {path:'/home' ,element:<Home></Home>},
        {path:'/cart' , element:<Cart></Cart>},
        {path:'/item/:id', element:<Quize></Quize>, loader: async({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)},
        {path:'rechart', element:<Cheart></Cheart>},
        {path:'blog', element:<About></About>},
        
    ]}
])