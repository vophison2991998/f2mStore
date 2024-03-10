import Home from '../Pages/Home';
import Help from '../Pages/Help';
import Error from '../Pages/Error';
import { HeaderOnly } from '../Components/Layouts';

const publicRouters=[
    {path :'/' ,component: Home},
    {path :'/Help' ,component: Help ,layout:HeaderOnly},

    {path :'*' ,component: Error ,layout:null},

];

const privateRouter=[]

export { publicRouters , privateRouter }