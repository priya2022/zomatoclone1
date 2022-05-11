import React,{Component} from 'react';
import axios from 'axios';

const url ="https://zomatoaapi.herokuapp.com/filter"

class Cuisine extends Component {

    filterCuisine = (event)=>{
        let meal_id = this.props.mealId;
        let CuisineId = event.target.value
        console.log("in cuisine", CuisineId)
        let cuisineUrl = "";
        if (CuisineId === "")
        {
            cuisineUrl = `${url}/${meal_id}`
        }
        else{
            cuisineUrl = `${url}/${meal_id}?cuisine=${CuisineId}`
        }
        axios.get(cuisineUrl)
        .then((res)=>{this.props.resPerCuisine(res.data)})
    }

    render(){
        return(
            <>
               <center>Cuisine Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCuisine}>
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>North Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="2" name="cuisine"/>South Indian
                    </label>
                    <label className="radio">
                        <input type="radio" value="3" name="cuisine"/>Chinese
                    </label>
                    <label className="radio">
                        <input type="radio" value="4" name="cuisine"/>Fast Food
                    </label>
                    <label className="radio">
                        <input type="radio" value="5" name="cuisine"/>Street Food
                    </label>
                </div>
            </>
        )
    }
}



export default Cuisine