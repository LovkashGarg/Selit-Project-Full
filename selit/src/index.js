import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Home';
import Sellbook from './components/sellbookpage';
import reportWebVitals from './reportWebVitals';
import Layout from './components/layout'
import Home from './Home'
import Orderstatus from '../src/components/orderstatus/orderstatus'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Aboutus from './components/Aboutus';

// const router=createBrowserRouter([
//   {
//   path:'/',
//   element:<Layout/>,
//   children:[
//     {
//       path:"",
//       element:<Home/>
//     },
//     {
//       path:"about",
//       element:<About/>
//     },
//     {
//       path:"Sellbookpage",
//       element:<Sellbook/>
//     },
//     {
//       path:"orderstatus",
//       element:<Orderstatus/>
//     }
//   ]
//   }
// ])

// another way to create router
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>} />
      <Route path='/aboutus' element={<Aboutus/>}/>
      <Route path='/Sellbookpage' element={<Sellbook/>}/>
      <Route path='/orderstatus' element={<Orderstatus/> }/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
