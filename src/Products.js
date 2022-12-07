import React from 'react';
function Products() {
    const hours = new Date().getHours();
    let timeofDay;

    if(hours <= 12) {
        timeofDay = 'morning'
    } else if (hours <= 21) {
        timeofDay = 'afternoon'
    } else {
        timeofDay = 'night'
    }
                const products = ["Learning React", "Pro React", "Beginning React"];
                const listProducts = products.map((product)=>
                <li key={product.toString()}>{product}</li>
                );

                return (
                <div>
                    <ul>{listProducts}</ul>
                    <div>Hi, hope you're fine, I just wanted to tell you good {timeofDay} and farewell!</div>

                    </div>

                
    );
}

export default Products