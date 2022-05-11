//https://zomatoaapi.herokuapp.com/filter/4?cuisine=1
//https://zomatoaapi.herokuapp.com/filter/1?hcost=1000&lcost=500
//https://zomatoaapi.herokuapp.com/filter/1?lcost=200&hcost=500&cuisineId=1
//https://zomatoaapi.herokuapp.com/filter/1?cuisineId=1&sort=-1
import axios from 'axios';
import React,{Component} from 'react';

const url ="https://zomatoaapi.herokuapp.com/filter"

class Cost extends Component {

    filterCost = (event) =>{
        let meal_id = this.props.mealId;
        let cost = (event.target.value).split('-')
        let lcost = cost[0]
        let hcost =cost[1]
        let costUrl = ""
        if(event.target.value === "")
        {
            costUrl = `${url}/${meal_id}`
        }
        else
        {
            costUrl = `${url}/${meal_id}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(costUrl)
        .then((res)=>{this.props.resPerCost(res.data)})


    }

    render(){
        return(
            <>
                <center>Cost Filter</center>
                <div style={{marginLeft:'15%'}} onChange={this.filterCost} >
                    <label className="radio">
                        <input type="radio" value="" name="cuisine"/>All
                    </label>
                    <label className="radio">
                        <input type="radio" value="100-300" name="cuisine"/>100-300
                    </label>
                    <label className="radio">
                        <input type="radio" value="301-500" name="cuisine"/>301-500
                    </label>
                    <label className="radio">
                        <input type="radio" value="501-700" name="cuisine"/>501-700
                    </label>
                    <label className="radio">
                        <input type="radio" value="701-900" name="cuisine"/>701-900
                    </label>
                    <label className="radio">
                        <input type="radio" value="901-1500" name="cuisine"/>901-1500
                    </label>
                </div>
            </>
        )
    }
}



export default Cost