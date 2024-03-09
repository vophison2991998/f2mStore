import Home from '../Pages/Home';
import Help from '../Pages/Help';
import Error from '../Pages/Error';


const publicRouters=[
    {path :'/' ,component: Home},
    {path :'/Help' ,component: Help},
    {path :'*' ,component: Error},

];

const privateRouter=[]

export {publicRouters,privateRouter}