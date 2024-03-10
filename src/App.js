import { Fragment } from 'react';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { publicRouters } from './routes';
import {DefaultLayout} from './Components/Layouts';


function App() {
  return (
    <BrowserRouter>
    <Routes>
     {
        publicRouters.map((route,index)=>{
          const Page = route.component;
          let Layout=DefaultLayout;
        

          if (route.layout) {

            Layout = route.layout;

        } else if 
        (route.layout === null) 
        {
          Layout = Fragment;
        }
          return <Route key={index} path={route.path} element={
              <Layout>
                <Page />
              </Layout>

          }></Route>;
           
        })
     }
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
