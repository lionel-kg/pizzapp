import React from "react";
import "../css/Pizza.css"


class Pizza extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log(props)

    }
    render()
    {
        return(
            <div className="container">
                {this.props.pizzaList.map((pizzaItem) => (
                
                <div className="pizza-list">
                    <img src={pizzaItem.img} alt="img-pizza"></img>
                    <h1 key={pizzaItem.id} > {pizzaItem.name}</h1>
                </div>
                ))}
            </div>
                
            
        );
    }
}
export default Pizza;
