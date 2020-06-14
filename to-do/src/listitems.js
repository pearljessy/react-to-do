import React from "react";
import "./listitems.css"
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import speechRecognition from "react-speech-recognition";
// import propTypes from "prop-types";


function ListItems(props){
	const items = props.items;
	const ListItems = items.map(item =>
	{
		return <div className="list" key={item.key}>
		         <p>{item.text}
                    <span>
                        <FontAwesomeIcon className="faicons" 
                        icon="trash"
                        onClick={
                        	() => props.deleteItem(item.key)
                        } />
                    </span>

		         </p>
               
               </div>
	})
	return(
        <div>{ListItems}</div>
  )
}

export default ListItems;