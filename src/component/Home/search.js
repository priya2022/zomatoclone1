import React,{Component} from 'react';
import {withRouter} from 'react-router-dom'
import './Search.css';


const lurl = 'https://zomatoaapi.herokuapp.com/location'
const rurl ='https://zomatoaapi.herokuapp.com/restaurants?stateId='


class Search extends Component{

    constructor(props){
        super(props)
        this.state = {
            location: '',
            restName:''
        }
    }

    renderCity = (data) =>{
        if(data)
        {
            return data.map((item) =>{
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }


    renderRest=(data)=>
    {
        if(data)
        {
            return data.map((item)=>
            {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} || {item.address}</option>
                )
            })
        }
    }

    handleCity =(event) => {
        let stateId = event.target.value;
        fetch(`${rurl}${stateId}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=> {
            this.setState({restDetails:data})
        })
    }

    handleRest = (event)=>{
        let restId = event.target.value;
        console.log("in search", this.props);
        this.props.history.push(`/details?restId=${restId}`)

    }

    render(){
        
        return(
            <div className="search">
                <div id="logo">
                    <span>E!</span>
                </div>
                <div id="heading">
                    Find The Best Restaurants Near You
                </div>
                <div className="dropdown">
                        <select id="city" onChange={this.handleCity} >
                            <option>----SELECT CITY----</option>
                            {this.renderCity(this.state.location)}
                           
                        </select>
                        <select className="restaurantSelect" id="hotels" onChange={this.handleRest}>
                            <option>----SELECT RESTAURANTS----</option>
                           {this.renderRest(this.state.restDetails)}
                        </select>
                </div>
            </div>
        )
    }



    componentDidMount()
    {
        fetch(lurl,{method: 'GET',})
        .then((res)=> res.json())
        .then((data)=> {
            this.setState({location:data})
        })
    }

}

export default withRouter(Search)