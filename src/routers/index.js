import Home from '../Pages/Home.js'
import Tes from '../Pages/test.js'
import Erron from '../Pages/Error.js'
const PublicRouters=[
    { path:'/',component : Home},
    { path:'/tes',component : Tes},
    { path: '*',component : Erron}
        
];

const privateRouters=[];

export  { PublicRouters , privateRouters }
