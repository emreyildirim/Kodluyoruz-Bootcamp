import Home from '../pages/Home';
import Order from '../pages/Order'

export const routes = [
    {
        path:'/',
        exact:true,
        component:()=><Home/>,
        title:'Home',
        isPrivate:false
    },
    {
        path:'/order',
        exact:false,
        component:()=> <Order/>,
        title:'Order',
        isPrivate:true
    }
]