import React from 'react';
import {Link} from 'react-router-dom'

const QuickDisplay = (props)=>{

    const listMenu =({mealData})=>{
        if(mealData)
        {
            return mealData.map((item)=>{
                return(
                    <Link to ={`Listing/${item.mealtype_id}`} key={item.mealtype_id} >
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt="snacks"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    <span>{item.mealtype}</span> 
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
        
    }

    return(
        <>
        {listMenu(props)}
        </>
        
    )

}
export default QuickDisplay