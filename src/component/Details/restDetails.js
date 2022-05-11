import React,{Component} from 'react';
import './Details.css'
import MenuDisplay from './menuDisplay'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Header from '../../header';

 const url ="https://zomatoaapi.herokuapp.com/details"
 const menuUrl = "https://zomatoaapi.herokuapp.com/menu"

 class restDetails extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            Details:'',
            menuList:'',
            userItem:'',
            mealId : sessionStorage.getItem('mealId'),
        }
    }
    addToCart = (data) => {
        console.log(">>>>>",data)
        this.setState({userItem:data})
    }
    proceed = () => {
        sessionStorage.setItem('menu',this.state.userItem)
        this.props.history.push(`/placeOrder/${this.state.Details.restaurant_name}`)
    }
     render(){
         let {Details} = this.state
         return(
             <>
              <Header/>
             <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={Details.restaurant_thumb} alt=""/>
                        </div>
                    </div>
                    <div className="tileContent">
                        <div className="content">
                            <h1>{Details.restaurant_name}</h1>
                            <span id="cfeedback">245 Customer Review</span>
                            <h4>Old Price <strike>Rs 1200</strike></h4>
                            <h4>New Price Rs {Details.cost}</h4>
                            <h3>We Provide Best Service</h3>
                            <div>
                                <div class="icons">
                                    <img src="https://i.ibb.co/2FbpqtH/sentizied.jpg" alt="sentizied"/>
                                </div>
                                <div class="icons">
                                    <img src="https://i.ibb.co/s56LLF9/homedelivery.png"/>
                                </div>
                            </div>
                            <div>
                            <Tabs>
                                <TabList>
                                    <Tab>Details</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>

                                <TabPanel>
                                    <h2>{Details.restaurant_name}</h2>
                                    <p>
                                        <b>{Details.restaurant_name}</b> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                    </p>
                                </TabPanel>
                                <TabPanel>
                                    <p>{Details.address}</p>
                                    <p>Phone: {Details.contact_number}</p>
                                </TabPanel>
                                
                            </Tabs>
                            <Link to={`/listing/${this.state.mealId}`} className="btn btn-danger">
                                Back
                            </Link> &nbsp;
                            <button className="btn btn-success" onClick={this.proceed}
                             >Proceed</button>
                            
                            
                            </div>
                        </div>
                    </div>
                    <MenuDisplay menuData = {this.state.menuList}
                    finalOrder = {(data)=>{this.addToCart(data)}}/>  
                </div>
             
             </>
         )
     }

     async componentDidMount() {
         console.log("in details", this.props)
         let restId = this.props.location.search.split('=')[1]
         let response = await axios.get(`${url}/${restId}`)
         let mealData = await axios.get(`${menuUrl}/${restId}`)
         this.setState({Details:response.data[0],menuList:mealData.data})
     }

 }
 export default restDetails