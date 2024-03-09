import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  publicRouters } from './routers';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     {
        publicRouters.map((route,index)=>{
          const Page = route.component;
          return <Route key={index} path={route.path} element={<Page />}></Route>;
           
        })
     }
      
    </Routes>
  </BrowserRouter>
  );
}

export default App;
