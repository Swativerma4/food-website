  import React ,{useContext}from 'react'
import './FoodDisplay.css'
  import { StoreContext } from '../Context/StoreContext'
import FoodItems from '../FoodItems/FoodItems'
  
  export default function FoodDisplay({category}) {
    const {food_list}=useContext(StoreContext)
    return (
      <div className='food-display  ' id="food-display">
        <h2 className='dish '> Top Dishes Near You</h2>
        <div className='food-display-list '>
            {food_list.map((item,index)=>{
                if(category==="All"||category===item.category)
                return <FoodItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItems>

            })}
        </div>
      </div>
    )
  }
  