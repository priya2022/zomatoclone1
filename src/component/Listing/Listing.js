import React,{Component} from 'react';
import axios from 'axios';
import './Listing.css';
import ListingDisplay from './ListingDisplay'
import CuisineFilter from '../Filters/Cuisine';
import SortFilter from '../Filters/Sort';
import CostFilter from '../Filters/Cost'
import Header from '../../header';

const rurl = " https://zomatoaapi.herokuapp.com/restaurants?meal_id="

class Listing extends Component{

    constructor(props){
        super(props)
        this.state ={

            mealType:'',

        }
    }

    setPerDataFilter = (data) => {
        this.setState({mealType:data})
    }

    render(){
        return(
            <>
             <Header/>
            <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                            <center>
                                <h3>Filter</h3>
                            </center>  
                            

                            <CuisineFilter mealId = {this.props.match.params.mealId}
                             resPerCuisine={(data) => {this.setPerDataFilter(data)}}/>
                            <CostFilter mealId = {this.props.match.params.mealId}
                            resPerCost = {(data)=>{this.setPerDataFilter(data)}}/>
                            <SortFilter mealId = {this.props.match.params.mealId}
                            resPerSort ={(data)=>{this.setPerDataFilter(data)}}/>   
                            </div>  
            <ListingDisplay listData ={this.state.mealType}/>
           
          </div>
          </div>
            </>
            
        )
    }

    componentDidMount(){
        let meal_id = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',meal_id)
        axios.get(`${rurl}${meal_id}`)
        
        .then((res)=>{
            this.setState({mealType:res.data})
        })
    }


}
export default Listing