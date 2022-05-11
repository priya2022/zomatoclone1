import axios from 'axios';
import React,{Component} from 'react';

const url ="https://zomatoaapi.herokuapp.com/filter"


class Sort extends Component {

    filterCuisine = (event) => {
        let cuisineId = event.target.value;
        let mealId = this.props.mealId
        let sort = -1;
        let cuisineUrl = ""
        if(cuisineId === ""){
            cuisineUrl = `${url}/${mealId}`
        }else{
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}&sort=${sort}`
            console.log("in cuisine sort",cuisineUrl)
        }
        axios.get(cuisineUrl)
        .then((res) => {this.props.resPerSort(res.data)})

    }

    render(){
        return(
            <>
                <center>Sort Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterSort} >
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>Low-High
                    </label>
                    <label className="radio">
                        <input type="radio" value="1" name="cuisine"/>High-Low
                    </label>
                   
                </div>
            </>
        )
    }
}



export default Sort