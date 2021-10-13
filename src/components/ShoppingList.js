import React from "react"
import "../css/ShoppingList.css"
import { plantList } from '../datas/PlantList';


const categories = plantList.reduce((acc, plant) =>
acc.includes(plant.category) ? acc : acc.concat(plant.category),
[]
)


class ShoppingList extends React.Component{
   
    render(){
        return(
        <div>
            <ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
            <ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.isBestSale && plant.category === "classique" ? <span>{plant.name} 🔥</span>: <span>{plant.name} 👎</span>}
					</li>
				))}
			</ul>
        </div>
        );
    }
}

export default ShoppingList;