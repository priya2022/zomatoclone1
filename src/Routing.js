import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './component/Home/Home'
import Listing from './component/Listing/Listing'
import Details from './component/Details/restDetails'
import ViewOrders from './component/bookings/viewOrder'
import PlaceOrder from './component/bookings/placeOrder'
import Login from './component/Login/Login'
import Register from './component/Login/Register'
import Footer from './footer'



const Routing = ()=>{
    return(
        <div>
        <BrowserRouter>
        <Route exact path='/' component={Home}/>
        <Route path='/Listing/:mealId' component ={Listing}/>
        <Route path='/Details' component = {Details}/>
        <Route path="/placeOrder/:restName" component={PlaceOrder}/>
        <Route path ="/viewBooking" component={ViewOrders}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Footer/>
        </BrowserRouter>
        </div>
        
    )
}
export default Routing;