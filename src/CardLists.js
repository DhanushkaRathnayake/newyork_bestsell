import React from 'react';
import Cards from './Cards';

 const CardLists=(props)=>{
    return (
        
             <div className="list">    
            {
               props.books.map((card,i)=>{
                    return <Cards
                            key={i}
                             image={card.book_image}
                             title={card.title}
                             author={card.author}
                             publisher={card.publisher}
                             amazon={card.amazon_product_url}
                             desc={card.description}
                             rank={card.rank_last_week}
                             contribute={card.contributor}
                           />
                })
                   
            }    
            </div>
        
    )
}
export default CardLists;