
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './Layout/Layout';
import Login_Sign from './Pages/Login_Sign';
import Home from './Pages/Home';
import About from './Pages/About';
import MarketPlace from './Pages/MarketPlace';
import Login from './common/Login';
import SignUp from './common/SignUp';
import MainMarket from './Pages/MainMarket';
import Layout2 from './Layout/Layout2';
import WasteData from './Pages/WasteData';
import Shipment from './Pages/Shipment';

 
function App() {

  const router = createBrowserRouter([
    
    {
      path: '/',
      element: <Layout />,
      children: [
        { path : "/" , element:  <Home/>  },
        {path: "/about" , element : <About />},
        
      ],
    },
    {path: "/marketPlace" ,
       element : <Layout2 /> ,
       children: [
        {path:'' , element: <MainMarket />},
        {path:'waste' , element: <WasteData />},
        {path:'ship' , element: <Shipment />},
       ]
      },
    {
      path: "/sign" , element : <Login_Sign /> ,
      children :[
        { path:"", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ]
    },

  ]);

  return <RouterProvider router={router} />;
}
 


export default App
