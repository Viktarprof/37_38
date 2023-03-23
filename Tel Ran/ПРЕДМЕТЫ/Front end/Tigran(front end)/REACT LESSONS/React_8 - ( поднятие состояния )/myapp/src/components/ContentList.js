import React from 'react';
import ContentItem from "./ContentItem"


function ContentList(props){
    const {card} = props
    console.log(card);


    return(
        <div>
            {card.map((el, index) => <ContentItem 
                                key = {index}
                                name = {el.name} 
                                price = {el.price}
                                check = {el.check}
                                />
                                )}
        </div>
    )
}
export default ContentList