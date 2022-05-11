import React from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay'

const url = "https://zomatoaapi.herokuapp.com/mealType"

class QuickSearch extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            mealType:''
        }
    }

    render(){
        return(
            <>
            <div className="quickSearch">
                    <span id="QuickSearchHeading">
                        QuickSearch
                    </span>
                    <span id="QuickSubHeading">
                        Find Restaurants By MealType
                    </span>
                   <QuickDisplay mealData = {this.state.mealType}/>
                </div>
            </>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({mealType:data})
        })

    }
}
export default QuickSearch